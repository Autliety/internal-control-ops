package com.hcit.taserver.approval;

import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.Privilege;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserRepository;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.matter.MatterService;
import com.hcit.taserver.fr.meeting.Meeting;
import com.hcit.taserver.fr.meeting.MeetingService;
import com.hcit.taserver.fr.meeting.Topic;
import com.hcit.taserver.fr.meeting.TopicService;
import com.hcit.taserver.fr.progress.Progress;
import com.hcit.taserver.fr.progress.ProgressService;
import com.hcit.taserver.ta.plan.Plan;
import com.hcit.taserver.ta.plan.PlanService;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

@RequiredArgsConstructor
@Service
public class ApprovalService {

  private final ApprovalRepository approvalRepository;
  private final ApprovalStepRepository approvalStepRepository;
  private final AuthService authService;
  private final UserRepository userRepository;
  private final ApplicationContext ctx;

  public List<Approval> getCurrentUserApproved() {
    var user = authService.getCurrentUser();
    return approvalStepRepository.findAllByApproveUser(user)
        .stream()
        .map(ApprovalStep::getApproval)
        .distinct()
        .collect(Collectors.toList());
  }

  public User getDefaultApproveUser() {
    User user = authService.getCurrentUser();
    return Optional.ofNullable(user.getParent())
        .orElseGet(() -> userRepository.findByDepartmentAndPrivilege(user.getDepartment(), Privilege.DEPT)
            .orElseGet(() -> userRepository.findById(1L)
                .orElseThrow()));
  }

  private Approval generate(Approval approval) {
    var step = ApprovalStep.builder()
        .approval(approval)
        .approveUser(approval.getApproveUser())
        .status(Status.AWAITING_REVIEW)
        .build();
    approval.setStep(List.of(step));
    approval.setId(null);
    approval.setRequestUser(authService.getCurrentUser());
    return approval;
  }

  public Approval generate(Approval input, Meeting meeting) {
    var approval = generate(input);
    approval.setMeeting(meeting);
    meeting.setApproval(approval);
    return approvalRepository.save(approval);
  }

  public Approval generate(Approval input, Topic topic) {
    var approval = generate(input);
    approval.setMeetingTopic(topic);
    topic.setApproval(approval);
    return approvalRepository.save(approval);
  }

  public Approval generate(Approval input, List<Matter> matter) {
    approvalRepository.deleteAll(
        matter.stream().map(Matter::getApproval).filter(Objects::nonNull).collect(Collectors.toList()));
    var approval = generate(input);
    approval.setMatter(matter);
    matter.forEach(m -> m.setApproval(approval));
    return approvalRepository.save(approval);
  }

  public Approval generate(Approval input, Progress progress) {
    var approval = generate(input);
    approval.setProgress(progress);
    progress.setApproval(approval);
    return approvalRepository.save(approval);
  }

  public Approval generate(Approval input, Plan plan) {
    var approval = generate(input);
    approval.setPlan(plan);
    plan.setApproval(approval);
    return approvalRepository.save(approval);
  }

  public Approval stepIn(Long id, Status newStatus, String content) {
    var approval = approvalRepository.findById(id).orElseThrow();
    var steps = approval.getStep();
    var lastStep = steps.get(approval.getStep().size() - 1);
    var lastStatus = lastStep.getStatus();

    ApprovalAdaptor adaptor;
    if (approval.getMeetingTopic() != null) {
      adaptor = ctx.getBean(TopicService.class);
    } else if (!CollectionUtils.isEmpty(approval.getMatter())) {
      adaptor = ctx.getBean(MatterService.class);
    } else if (approval.getProgress() != null) {
      adaptor = ctx.getBean(ProgressService.class);
    } else if (approval.getPlan() != null) {
      adaptor = ctx.getBean(PlanService.class);
    } else if (approval.getMeeting() != null) {
      adaptor = ctx.getBean(MeetingService.class);
    } else {
      throw new IllegalArgumentException("没有实际单据的审核");
    }

    if (lastStatus == Status.AWAITING_REVIEW) {
      // 领导审批
      if (!authService.isCurrentUser(lastStep.getApproveUser())) {
        throw new IllegalStateException("不正确的审核人");
      }
      if (newStatus == Status.REVIEWED) {
        // 通过
        adaptor.onReview(approval);
        lastStep.setStatus(Status.REVIEWED);

      } else if (newStatus == Status.REVIEW_DENIED) {
        // 不通过
        adaptor.onDenied(approval);
        lastStep.setStatus(Status.REVIEW_DENIED);
        lastStep.setContent(content);

        steps.add(ApprovalStep.builder()
            .approval(approval)
            .approveUser(approval.getRequestUser())
            .status(Status.AWAITING_FIX)
            .build());
      } else {
        throw new IllegalArgumentException("不正确的新审批状态");
      }

    } else if (lastStatus == Status.AWAITING_FIX && newStatus == Status.FIXED) {
      // 退回后重新修改
      if (!authService.isCurrentUser(lastStep.getApproveUser())) {
        throw new IllegalStateException("不正确的编辑人");
      }
      adaptor.onFixed(approval);
      lastStep.setStatus(Status.FIXED);
      lastStep.setContent(content);

      steps.add(ApprovalStep.builder()
          .approval(approval)
          .approveUser(approval.getApproveUser())
          .status(Status.AWAITING_REVIEW)
          .build());
    }

    approvalStepRepository.saveAll(steps);
    return approval;
  }

  public Approval reset(Approval approval) {
    var step = approval.getStep().get(0);
    step.setStatus(Status.AWAITING_REVIEW);
    step.setContent(null);
    approvalStepRepository.save(step);
    return approval;
  }

  public Approval findById(Long id) {
    return approvalRepository.findById(id).orElseThrow();
  }

  public void save(Approval approval) {
    approvalRepository.save(approval);
  }
}
