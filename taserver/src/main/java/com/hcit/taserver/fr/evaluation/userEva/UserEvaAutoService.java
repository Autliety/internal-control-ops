package com.hcit.taserver.fr.evaluation.userEva;

import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserRepository;
import com.hcit.taserver.fr.evaluation.Evaluation;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.matter.MatterRepository;
import com.hcit.taserver.fr.matter.form.MatterForm;
import com.hcit.taserver.fr.matter.form.MatterFormRepository;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserEvaAutoService {

  private final UserEvaService userEvaService;
  private final UserRepository userRepository;
  private final MatterFormRepository matterFormRepository;
  private final MatterRepository matterRepository;

  @Scheduled(cron = "0 0 5 * * ? ")
  public void autoEvaluations() {
    List<User> users = userRepository.findAll();
    for (User user : users) {
      var result = new ArrayList<UserEvaluation>();
      for (long l = 1L; l <= 3; l++) {
        result.add(userEvaAuto(l, user.getId()));
      }
      userEvaService.updateEvaluation(result, UpdateType.AUTO, user.getId());
    }
  }

  public UserEvaluation userEvaAuto(long evaId, Long userId) {
    BigDecimal auto = null;
    if (evaId == 1) {
      auto = BigDecimal.ZERO;
    }
    if (evaId == 2) {
      auto = evaluation2(userId);
    }
    if (evaId == 3) {
      auto = BigDecimal.ZERO;
    }
    if (auto == null) {
      throw new IllegalArgumentException();
    }
    return UserEvaluation.builder()
        .id(new Key(User.builder().id(userId).build(), Evaluation.builder().id(evaId).build()))
        .auto(auto).build();
  }

  private BigDecimal evaluation2(Long userId) {
    // 不到时间满分
    var now = LocalDate.now();
    var endTime = now.withMonth(3).withDayOfMonth(31);
    if (now.isBefore(endTime)) {
      return new BigDecimal(8);
    }

    // 无需做问题清单的满分
    MatterForm matterFrom = matterFormRepository.findByUserId(userId);
    if (matterFrom == null) {
      return new BigDecimal(8);
    }

    // 每个问题1分，最高4分
    List<Matter> matters = matterRepository.findAllByMatterFormId(matterFrom.getId());
    int scoreMatter = Math.min(matters.size(), 4);

    // 有措施1分，最高4分
    int scoreMeasure = 0;
    for (Matter matter : matters) {
      if (matter.getMeasure().size() != 0) {
        scoreMeasure++;
      }
    }
    scoreMeasure = Math.min(scoreMeasure, 4);
    return new BigDecimal(scoreMatter + scoreMeasure);
  }

}
