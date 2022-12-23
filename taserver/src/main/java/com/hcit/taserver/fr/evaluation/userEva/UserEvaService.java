package com.hcit.taserver.fr.evaluation.userEva;

import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserRepository;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.matter.MatterRepository;
import com.hcit.taserver.fr.matter.form.MatterForm;
import com.hcit.taserver.fr.matter.form.MatterFormRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserEvaService {

  private static final BigDecimal SELF_WEIGHT = BigDecimal.valueOf(0.1);
  private static final BigDecimal LEADER_WEIGHT = BigDecimal.valueOf(0.2);
  private static final BigDecimal AUTO_WEIGHT = BigDecimal.valueOf(0.7);
  private static final BigDecimal SPECIAL_WEIGHT = BigDecimal.valueOf(0.9);

  private final MatterFormRepository matterFormRepository;
  private final MatterRepository matterRepository;
  private final UserRepository userRepository;

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
        }

        //todo
        if (inputUe.getAuto() == null) {
          for (UserEvaluation oneOrigin:origin) {
          }
          if (inputUe.getId().getEvaluation().getId() == 2) {
            inputUe.setAuto(BigDecimal.valueOf(evaluationUser(authService.getCurrentUser().getId())));
          }else {
            inputUe.setAuto(BigDecimal.ZERO);
          }
        }else {
          inputUe.setLeaderUser(authService.getCurrentUser());
        }
        inputUe.setYear(LocalDate.now().getYear());
        inputUe.setTotal(countTotal(inputUe));
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
        originUe.setTotal(countTotal(originUe));
        result.add(originUe);
      }
    }

    return userEvaRepository.saveAll(result);
  }

  private BigDecimal countTotal(UserEvaluation ue) {
    // todo if (ue.getId().getEvaluation().isSpecial()) {} else
    return ue.getSelf().multiply(SELF_WEIGHT)
        .add(ue.getLeader().multiply(LEADER_WEIGHT))
        .add(ue.getAuto().multiply(AUTO_WEIGHT));
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

  @Scheduled(cron = "0 0 5 * * ? ")
  public void evaluationAllUser() {
    List<User> users = userRepository.findAll();
    for (User user : users) {
      try {
        Long id = user.getId();
        evaluationUser(id);
      } catch (NullPointerException e) {
      }
    }
  }

  public Integer evaluationUser(Long userId) {

    int scoreMatter;
    int scoreMeasure = 0;
    int scoreTotal = 0;

    MatterForm matterFrom = matterFormRepository.findByUserId(userId);
    if (matterFrom == null) {
      scoreTotal = 8;
      return scoreTotal;
    }
    List<Matter> matters = matterRepository.findByMatterFormId(matterFrom.getId());
    int size = matters.size();
    scoreMatter = Math.min(size, 4);

    var endTime = LocalDate.now().withMonth(3).withDayOfMonth(31);
    if (endTime.isBefore(LocalDate.now())) {
      for (Matter matter : matters) {
        assert matter.getId() != null;
        if (matterRepository.findByMatterId(matter.getId()).size() != 0) {
          scoreMeasure++;
          if (scoreMeasure >= 4) {
            scoreMeasure = 4;
          }
        }
        scoreTotal = scoreMatter + scoreMeasure;
      }
    } else {
      scoreTotal = 8;
    }
    return scoreTotal;
  }
}
