package com.hcit.taserver.fr.evaluation.userEva;

import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserRepository;
import com.hcit.taserver.fr.evaluation.userEva.entity.Key;
import com.hcit.taserver.fr.evaluation.userEva.entity.UpdateType;
import com.hcit.taserver.fr.evaluation.userEva.entity.UserEvaListDto;
import com.hcit.taserver.fr.evaluation.userEva.entity.UserEvaluation;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserEvaService {

  private static final BigDecimal SELF_WEIGHT = BigDecimal.valueOf(0.1);
  private static final BigDecimal LEADER_WEIGHT = BigDecimal.valueOf(0.2);
  private static final BigDecimal AUTO_WEIGHT = BigDecimal.valueOf(0.7);
  private static final BigDecimal SPECIAL_WEIGHT = BigDecimal.valueOf(0.9);

  private final UserRepository userRepository;
  private final UserEvaRepository userEvaRepository;
  private final AuthService authService;

  public List<UserEvaluation> updateEvaluation(List<UserEvaluation> evaluations, UpdateType type, Long destUserId) {
    User user = destUserId != null
        ? userRepository.findById(destUserId).orElseThrow()
        : authService.getCurrentUser();

    List<UserEvaluation> origin = userEvaRepository.findAllById_UserId(user.getId());
    Map<Long, UserEvaluation> originMap = origin.stream()
        .collect(Collectors.toMap(
            userEvaluation -> userEvaluation.getId().getEvaluation().getId(),
            Function.identity()));

    List<UserEvaluation> result = new ArrayList<>();
    for (UserEvaluation inputUe : evaluations) {
      if (!Objects.equals(inputUe.getId().getUser().getId(), user.getId())) {
        throw new IllegalArgumentException();
      }

      var originUe = originMap.get(inputUe.getId().getEvaluation().getId());
      if (originUe == null) {
        originUe = UserEvaluation.builder()
            .id(new Key(user, inputUe.getId().getEvaluation()))
            .build();
      }
      if (type == UpdateType.LEADER) {
        originUe.setLeaderUser(authService.getCurrentUser());
        originUe.setLeader(inputUe.getLeader());

      } else if (type == UpdateType.SELF) {
        originUe.setSelf(inputUe.getSelf());

      } else if (type == UpdateType.AUTO) {
        originUe.setAuto(inputUe.getAuto());
      }

      originUe.setTotal(countTotal(originUe));
      result.add(originUe);
    }

    return userEvaRepository.saveAll(result);
  }

  private BigDecimal countTotal(UserEvaluation ue) {
    if (BooleanUtils.isTrue(ue.getId().getEvaluation().getIsSpecial())) {
      return Optional.ofNullable(ue.getSelf()).orElse(BigDecimal.ZERO).multiply(SELF_WEIGHT)
          .add(
              Optional.ofNullable(ue.getLeader()).orElse(BigDecimal.ZERO).multiply(SPECIAL_WEIGHT));

    } else {
      return Optional.ofNullable(ue.getSelf()).orElse(BigDecimal.ZERO).multiply(SELF_WEIGHT)
          .add(
              Optional.ofNullable(ue.getLeader()).orElse(BigDecimal.ZERO).multiply(LEADER_WEIGHT))
          .add(
              Optional.ofNullable(ue.getAuto()).orElse(BigDecimal.ZERO).multiply(AUTO_WEIGHT));
    }
  }

  public List<UserEvaluation> findAllByUserId(Long id) {
    if (id == null) {
      return userEvaRepository.findAllById_UserId(authService.getCurrentUser().getId());
    } else {
      return userEvaRepository.findAllById_UserId(id);
    }
  }

  public List<UserEvaListDto> findAllByUserPrivilege() {
    var evas = userEvaRepository.findAll((root, query, cb) ->
        query.where(authService.getPrivilegePredicate(root, cb, root.get("id").get("user")))
            .getRestriction()
    );
    var evaMaps = evas.stream().collect(Collectors.groupingBy(eva -> eva.getId().getUser()));
    return evaMaps.entrySet()
        .stream()
        .map(entry -> UserEvaListDto.builder()
            .user(entry.getKey())
            .year(2022)
            .userEvaluations(entry.getValue())
            .build())
        .collect(Collectors.toList());
  }
}
