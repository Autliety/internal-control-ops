package com.hcit.taserver.approval;

import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.meeting.Meeting;
import com.hcit.taserver.fr.meeting.Topic;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ApprovalService {

  private final ApprovalRepository approvalRepository;
  private final ApprovalStepRepository approvalStepRepository;
  private final AuthService authService;

  private Approval generate(Long approveUserId) {
    var approval = Approval.builder()
        .build();
    var step = ApprovalStep.builder()
        .approval(approval)
        .approveUser(User.builder().id(approveUserId).build())
        .status(Status.AWAITING_REVIEW)
        .build();
    approval.setStep(List.of(step));
    return approval;
  }

  public Approval generate(Long id, Meeting meeting) {
    var approval = generate(id);
    approval.setMeeting(meeting);
    meeting.setApproval(approval);
    return approvalRepository.save(approval);
  }

  public Approval generate(Long id, Topic topic) {
    var approval = generate(id);
    approval.setMeetingTopic(topic);
    topic.setApproval(approval);
    return approvalRepository.save(approval);
  }

  public Approval generate(Long id, Matter matter) {
    var approval = generate(id);
    approval.setMatter(matter);
    matter.setApproval(approval);
    return approvalRepository.save(approval);
  }

  public Approval stepIn(Long id, String content) {
    var approval = approvalRepository.findById(id).orElseThrow();
    var step = approval.getStep().get(0);
    if (!authService.isCurrentUser(step.getApproveUser())) {
      throw new IllegalStateException("非正确的审核人");
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
    approvalStepRepository.save(step);
    return approval;
  }

}
