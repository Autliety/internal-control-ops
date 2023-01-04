package com.hcit.taserver.fr.evaluation.userEva;

import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserRepository;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.matter.MatterRepository;
import com.hcit.taserver.fr.matter.form.MatterForm;
import com.hcit.taserver.fr.matter.form.MatterFormRepository;
import com.hcit.taserver.fr.meeting.MeetingRepository;
import com.hcit.taserver.fr.meeting.topic.MeetingTopicRepository;
import com.hcit.taserver.fr.ordinal.FormType;
import com.hcit.taserver.fr.ordinal.OrdinalForm;
import com.hcit.taserver.fr.ordinal.OrdinalFormRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
  private final MeetingRepository meetingRepository;
  private final UserEvaRepository userEvaRepository;
  private final MeetingTopicRepository meetingTopicRepository;
  private final OrdinalFormRepository ordinalFormRepository;

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

  public BigDecimal countTotal(UserEvaluation ue) {
    // todo if (ue.getId().getEvaluation().isSpecial()) {} else
    return Optional.ofNullable(ue.getSelf()).orElse(BigDecimal.ZERO).multiply(SELF_WEIGHT)
        .add(
            Optional.ofNullable(ue.getLeader()).orElse(BigDecimal.ZERO).multiply(LEADER_WEIGHT))
        .add(
            Optional.ofNullable(ue.getAuto()).orElse(BigDecimal.ZERO).multiply(AUTO_WEIGHT));
  }

  public List<UserEvaluation> findAllByUserId(Long id) {
    if (id == null) {
      return userEvaRepository.findAllById_UserId(authService.getCurrentUser().getId());
    } else {
      return userEvaRepository.findAllById_UserId(id);
    }
  }

  public BigDecimal evaluationUserOne(Long userId) {
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

  public BigDecimal evaluationUserThree(Long userId) {
    var ordinalForms = ordinalFormRepository.findAllByFormTypeAndMultiUser1Id(FormType.LEARNING, userId);

    Set<Integer> months = new HashSet<>();
    for (OrdinalForm ordinalForm : ordinalForms) {
      int value = ordinalForm.getCreateTime().getMonth().getValue();
      months.add(value);
    }

    // 2.0 - 0.2 * max[ (12 - size), 0 ]
    return new BigDecimal(20).add(
        new BigDecimal(-2).multiply(
            BigDecimal.ZERO.max(
                new BigDecimal(12).add(new BigDecimal(months.size()).negate())))
    ).divide(BigDecimal.TEN, 2, RoundingMode.HALF_UP);
  }
}
