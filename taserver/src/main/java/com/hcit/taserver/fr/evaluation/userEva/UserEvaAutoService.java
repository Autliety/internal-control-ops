package com.hcit.taserver.fr.evaluation.userEva;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalRepository;
import com.hcit.taserver.approval.ApprovalStepRepository;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserRepository;
import com.hcit.taserver.fr.evaluation.Evaluation;
import com.hcit.taserver.fr.inform.Inform;
import com.hcit.taserver.fr.inform.InformRepository;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.matter.MatterRepository;
import com.hcit.taserver.fr.matter.form.MatterForm;
import com.hcit.taserver.fr.matter.form.MatterFormRepository;
import com.hcit.taserver.fr.meeting.MeetingRepository;
import com.hcit.taserver.fr.ordinal.FormType;
import com.hcit.taserver.fr.ordinal.OrdinalForm;
import com.hcit.taserver.fr.ordinal.OrdinalFormRepository;
import com.hcit.taserver.fr.three.Three;
import com.hcit.taserver.fr.three.ThreeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;
import java.util.stream.Collectors;

import static com.hcit.taserver.common.Status.REVIEW_DENIED;

@RequiredArgsConstructor
@Service
@Slf4j
public class UserEvaAutoService {

  private final UserEvaService userEvaService;
  private final UserRepository userRepository;
  private final MatterFormRepository matterFormRepository;
  private final MatterRepository matterRepository;
  private final MeetingRepository meetingRepository;
  private final OrdinalFormRepository ordinalFormRepository;
  private final ThreeRepository threeRepository;
  private final ApprovalRepository approvalRepository;
  private final ApprovalStepRepository approvalStepRepository;
  private final InformRepository informRepository;

  @Scheduled(cron = "0 0 5 * * ? ")
  public void autoEvaluations() {
    List<User> users = userRepository.findAll();
    for (User user : users) {
      var result = new ArrayList<UserEvaluation>();
      for (long l = 1L; l <= 21; l++) {
        result.add(userEvaAuto(l, user.getId()));
      }
      userEvaService.updateEvaluation(result, UpdateType.AUTO, user.getId());
    }
  }

  public UserEvaluation userEvaAuto(long evaId, Long userId) {
    BigDecimal auto = BigDecimal.ZERO;
    if (evaId == 1) {
      auto = evaluation1(userId);
    }
    if (evaId == 2) {
      auto = evaluation2(userId);
    }
    if (evaId == 3) {
      auto = evaluation3(userId);
    }
    if (evaId == 7) {
      auto = evaluation7(userId);
    }
    if (evaId == 9) {
      auto = evaluation9(userId);
    }
    if (evaId == 10) {
      auto = evaluation10(userId);
    }
    if (evaId == 11) {
      auto = evaluation11(userId);
    }
    if (evaId == 16) {
      auto = evaluation16(userId);
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
    var ordinalForms = ordinalFormRepository.findAllByFormTypeAndMultiUser1Id(FormType.LEARNING, userId);

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

  public BigDecimal evaluation7(Long userId) {
    var threeByRequestUserId = threeRepository.findByRequestUserId(userId);

    int quantity = 0;
    BigDecimal opinionScore = null;
    BigDecimal approvalScore = null;
    for (Three three : threeByRequestUserId) {
      var approvalsByThreeId = approvalRepository.findByThreeId(three.getId());
      for (Approval approval : approvalsByThreeId) {
        var approvalSteps = approvalStepRepository.findAllByApprovalId(approval.getId());
        var count = approvalSteps.stream().filter(approvalStep -> approvalStep.getStatus() == REVIEW_DENIED).count();
        approvalScore = BigDecimal.valueOf(count);
      }

      var decisionResult = three.getDecisionResult();
      if (decisionResult.startsWith("同意")) {
        quantity++;
        opinionScore = BigDecimal.valueOf(quantity);
      }
    }
    return BigDecimal.ZERO.max(
        new BigDecimal(10)
            .add(opinionScore.negate())
            .add(approvalScore.negate())
    );
  }

  public BigDecimal evaluation9(Long userId) {
    var ordinalForm = ordinalFormRepository.findBySingleUser1Id(userId);
    var count = ordinalForm.stream().filter(o -> o.getFormType() == FormType.REMIND).count();
    BigDecimal score = null;
    if (count == 0) {
      score = BigDecimal.ZERO;
    } else {
      score = BigDecimal.valueOf(2);
    }
    log.info("score: " + score);
    return score;
  }

  public BigDecimal evaluation10(Long userId) {
    var ordinalForm = ordinalFormRepository.findBySingleUser1Id(userId);
    var ordinalFormList = ordinalForm.stream().filter(o -> o.getFormType() == FormType.REPORT).collect(Collectors.toList());
    BigDecimal totalScore = null;
    if (ordinalFormList.size() == 0) {
      totalScore = BigDecimal.ONE;
    } else {
      var count = ordinalFormList.stream().filter(longContent2 -> longContent2.getContent2() == null).count();
      if (count != 0) {
        totalScore = BigDecimal.valueOf(3);
      } else {
        totalScore = BigDecimal.valueOf(4);
      }
    }
    log.info("score: " + totalScore);
    return totalScore;
  }

  public BigDecimal evaluation11(Long userId) {
    return BigDecimal.valueOf(4);
  }

  public BigDecimal evaluation16(Long userId) {
    var informsByUserId = informRepository.findByFromUserId(userId);
    ArrayList percent = new ArrayList<>();
    int count = 0;
    for (Inform inform : informsByUserId) {
      var matters = matterRepository.findAllBySourceInformId(inform.getId());
      for (Matter matter : matters) {
        Integer measurePercent = matter.getMeasurePercent();
        if (measurePercent != 100) {
          log.info("percent" + measurePercent);
          count++;
        }
      }
    }
    BigDecimal score = null;
    if (count >= 2) {
      score = BigDecimal.ZERO;
    }
    if (count == 1) {
      score = BigDecimal.ONE;
    }
    if (count == 0) {
      score = BigDecimal.valueOf(2);
    }
    log.info("score； " + score);
    return score;
  }

}
