package com.hcit.taserver.fr.evaluation.userEva;

import com.hcit.taserver.department.user.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserEvaService {

  private final UserEvaRepository userEvaRepository;
  private final AuthService authService;

  public List<UserEvaluation> evaluation(List<UserEvaluation> evaluations, Long userId) {
    boolean isLeader = userId != null;

    List<UserEvaluation> origin = userEvaRepository.findAllById(
        evaluations.stream()
            .map(UserEvaluation::getId)
            .collect(Collectors.toList()));
    Map<Key, UserEvaluation> originMap = origin.stream()
        .collect(Collectors.toMap(
            UserEvaluation::getId,
            Function.identity()));

    List<UserEvaluation> result = new ArrayList<>();
    for (UserEvaluation inputUe : evaluations) {
      if (!Objects.equals(
          inputUe.getId().getUser().getId(),
          Optional.ofNullable(userId).orElse(authService.getCurrentUser().getId()))) {
        throw new IllegalArgumentException();
      }

      var originUe = originMap.get(inputUe.getId());
      if (originUe == null) {
        if (inputUe.getSelf() == null) {
          inputUe.setSelf(BigDecimal.ZERO);
        }
        if (inputUe.getLeader() == null) {
          inputUe.setLeader(BigDecimal.ZERO);
        } else {
          inputUe.setLeaderUser(authService.getCurrentUser());
        }
        if (inputUe.getAuto() == null) {
          inputUe.setAuto(BigDecimal.ZERO);
        }
        result.add(inputUe);

      } else {
        if (isLeader) {
          //领导评分
          originUe.setLeaderUser(authService.getCurrentUser());
          originUe.setLeader(inputUe.getLeader());
        } else {
          //自评更新
          originUe.setSelf(inputUe.getSelf());
        }
        result.add(originUe);
      }
    }

    return userEvaRepository.saveAll(result);
  }

  public List<UserEvaluation> findAllByUserId(Long id) {
    if (id == null) {
      return userEvaRepository.findAllById_UserId(authService.getCurrentUser().getId());
      // my score
    } else {
      return userEvaRepository.findAllById_UserId(id);
      // find score by user id
    }
  }


}
