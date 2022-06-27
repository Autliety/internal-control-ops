package com.hcit.taserver.approval;

import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.meeting.Meeting;
import com.hcit.taserver.fr.meeting.Topic;
import com.hcit.taserver.fr.progress.Progress;
import com.hcit.taserver.ta.plan.Plan;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ApprovalService {

  private final ApprovalRepository approvalRepository;
  private final ApprovalStepRepository approvalStepRepository;
  private final AuthService authService;

  public List<Approval> getCurrentUserApproved() {
    var user = authService.getCurrentUser();
    return approvalStepRepository.findAllByApproveUser(user)
        .stream()
        .map(ApprovalStep::getApproval)
        .distinct()
        .collect(Collectors.toList());
  }

  private Approval generate(Approval approval) {
    var step = ApprovalStep.builder()
        .approval(approval)
        .approveUser(approval.getApproveUser())
        .status(Status.AWAITING_REVIEW)
        .build();
    approval.setStep(List.of(step));
    approval.setId(null);
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

  public Approval generate(Approval input, Matter matter) {
    var approval = generate(input);
    approval.setMatter(matter);
    matter.setApproval(approval);
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

  public Approval stepIn(Long id, String content) {
    var approval = approvalRepository.findById(id).orElseThrow();
    var step = approval.getStep().get(0);
    if (!authService.isCurrentUser(step.getApproveUser())) {
      throw new IllegalStateException("不正确的审核人");
    }
    if (content == null) {
      step.setStatus(Status.REVIEWED);
      approvalStepRepository.save(step);
    } else {
      // todo 审核退回修改
    }
    return approval;
  }

  public Approval reset(Approval approval) {
    var step = approval.getStep().get(0);
    step.setStatus(Status.AWAITING_REVIEW);
    step.setContent(null);
    approvalStepRepository.save(step);
    return approval;
  }

}
