package com.hcit.taserver.fr.evaluation.userEva;

import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserRepository;
import com.hcit.taserver.fr.evaluation.Evaluation;
import com.hcit.taserver.fr.evaluation.EvaluationRepository;
import com.hcit.taserver.fr.evaluation.userEva.entity.Key;
import com.hcit.taserver.fr.evaluation.userEva.entity.UpdateType;
import com.hcit.taserver.fr.evaluation.userEva.entity.UserEvaluation;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.matter.MatterRepository;
import com.hcit.taserver.fr.matter.form.MatterForm;
import com.hcit.taserver.fr.matter.form.MatterFormRepository;
import com.hcit.taserver.fr.matter.measure.Measure;
import com.hcit.taserver.fr.meeting.MeetingRepository;
import com.hcit.taserver.fr.motion.MotionRepository;
import com.hcit.taserver.fr.ordinal.FormType;
import com.hcit.taserver.fr.ordinal.OrdinalForm;
import com.hcit.taserver.fr.ordinal.OrdinalFormRepository;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserEvaAutoService {

  private final EvaluationRepository evaluationRepository;
  private final UserEvaService userEvaService;
  private final UserRepository userRepository;
  private final MatterFormRepository matterFormRepository;
  private final MatterRepository matterRepository;
  private final MeetingRepository meetingRepository;
  private final OrdinalFormRepository ordinalFormRepository;
  private final MotionRepository motionRepository;

  @Scheduled(cron = "0 0 5 * * ? ")
  public void autoEvaluations() {
    var evaluations = evaluationRepository.findAllByYearAndIsSpecialFalse(2022);
    var users = userRepository.findAll();
    // 班子成员
    var evaPage1 = evaluations.stream()
        .filter(e -> Objects.equals(e.getPage(), 1))
        .collect(Collectors.toList());
    List<User> usersPage1 = users.stream()
        .filter(u -> Objects.equals(3L, u.getDepartment().getId()))
        .collect(Collectors.toList());
    for (User user : usersPage1) {
      var result = evaPage1.stream()
          .map(e -> userEvaAuto(e.getId(), user.getId()))
          .filter(Objects::nonNull)
          .collect(Collectors.toList());
      userEvaService.updateEvaluation(result, UpdateType.AUTO, user.getId());
    }

    // todo 站办
  }

  public UserEvaluation userEvaAuto(Long evaId, Long userId) {
    BigDecimal auto = BigDecimal.ZERO;
    if (evaId == 1 || evaId == 22) {
      auto = evaluation1(userId);
    }
    if (evaId == 2 || evaId == 23) {
      auto = evaluation2(userId);
    }
    if (evaId == 3 || evaId == 24) {
      auto = evaluation3(userId);
    }
    if (evaId == 4 || evaId == 25) {
      auto = evaluation4(userId);
    }
    if (evaId == 5) {
      auto = evaluation5(userId);
    }
    if (evaId == 6) {
      auto = evaluation6(userId);
    }

    if (evaId == 17) {
      auto = evaluation17(userId);
    }
    if (evaId == 18) {
      auto = evaluation18(userId);
    }
    if (evaId == 19) {
      auto = evaluation19(userId);
    }
    return UserEvaluation.builder()
        .id(new Key(User.builder().id(userId).build(), Evaluation.builder().id(evaId).build()))
        .auto(auto).build();
  }

  private BigDecimal evaluation1(Long userId) {
    int requireTimes = 4;
    var meetingByUserId = meetingRepository.findAllByMeetingUserId(userId);
    var meetingSize = meetingByUserId.size();

    var myTopic = meetingByUserId.stream()
        .flatMap(meeting -> meeting.getTopic().stream())
        .filter(topic -> Objects.equals(topic.getUser().getId(), userId))
        .collect(Collectors.toList());
    var topicSize = myTopic.size();
    var reviewedSize = myTopic.stream()
        .filter(topic -> topic.getStatus() == Status.REVIEWED)
        .count();

    // 4
    // - max(0, requireTimes - meetingSize) * 0.5
    // - max(0, requireTime - topicSize) * 0.3
    // - max(0, requireTimes - reviewedSize) * 0.2
    return new BigDecimal(40)
        .add(BigDecimal.ZERO.max(new BigDecimal(requireTimes - meetingSize)).multiply(new BigDecimal(5)).negate())
        .add(BigDecimal.ZERO.max(new BigDecimal(requireTimes - topicSize)).multiply(new BigDecimal(3)).negate())
        .add(BigDecimal.ZERO.max(new BigDecimal(requireTimes - reviewedSize)).multiply(new BigDecimal(2)).negate())
        .divide(BigDecimal.TEN, 2, RoundingMode.HALF_UP);
  }

  private BigDecimal evaluation2(Long userId) {
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

  private BigDecimal evaluation3(Long userId) {
    var ordinalForms = ordinalFormRepository.findAllByFormTypeAndMultiUser1_Id(FormType.LEARNING, userId);

    Set<Integer> months = new HashSet<>();
    for (OrdinalForm ordinalForm : ordinalForms) {
      int value = ordinalForm.getCreateTime().getMonth().getValue();
      months.add(value);
    }

    // max{0, 2.0 - 0.2 * max[ (12 - size), 0 ]}
    return BigDecimal.ZERO.max(
        new BigDecimal(20).add(
            new BigDecimal(-2).multiply(
                BigDecimal.ZERO.max(
                    new BigDecimal(12).add(new BigDecimal(months.size()).negate())))
        ).divide(BigDecimal.TEN, 2, RoundingMode.HALF_UP)
    );
  }

  private BigDecimal evaluation4(Long userId) {
    var endDate2 = LocalDateTime.of(2023, 1, 10, 0, 0);

    var notFinished = new ArrayList<Matter>();
    var timeOvered = new ArrayList<Matter>();
    for (Matter m : matterFormRepository.findByUserId(userId).getMatters()) {
      if (m.getMeasurePercent() < 100) {
        notFinished.add(m);
      } else if (m.getMeasure().stream().map(Measure::getUpdateTime).anyMatch(t -> t != null && t.isAfter(endDate2))) {
        timeOvered.add(m);
      }
    }

    // max(0, 16 - 2*notFinished.size - 1*timeOvered.size)
    return BigDecimal.ZERO.max(new BigDecimal(16 - 2 * notFinished.size() - timeOvered.size()));
  }

  private BigDecimal evaluation5(Long userId) {
    var talking = ordinalFormRepository.findAllByFormTypeAndSingleUser1_Id(FormType.TALKING, userId);
    return new BigDecimal(talking.size() == 0 ? 0 : 2);
  }

  private BigDecimal evaluation6(Long userId) {
    var inspect = ordinalFormRepository.findAllByFormTypeAndSingleUser1_Id(FormType.INSPECT, userId);
    var inspectSize = inspect.size();
    var matterSize = inspect.stream().mapToLong(i -> i.getMatter().size()).sum();
    return new BigDecimal(Math.min(inspectSize, 2) + Math.min(matterSize, 2));
  }

  private BigDecimal evaluation17(Long userId) {
    var motions = motionRepository.findAllByExecuteUser_Id(userId);
    var count = motions.stream().filter(m -> CollectionUtils.isEmpty(m.getExecuteAttach())).count();
    return new BigDecimal(Math.max(0, 2 - count));
  }

  private BigDecimal evaluation18(Long userId) {
    var list = ordinalFormRepository.findAllByFormTypeAndSingleUser1_Id(FormType.QUESTION, userId);
    return new BigDecimal(list.size() > 0 ? 2 : 1);
  }

  private BigDecimal evaluation19(Long userId) {
    return new BigDecimal(4);
  }

}
