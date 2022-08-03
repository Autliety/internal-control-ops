package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalAdaptor;
import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeetingService implements ApprovalAdaptor {

  private final MeetingRepository meetingRepository;
  private final AuthService authService;
  private final ApprovalService approvalService;

  public List<Meeting> findAll() {
    return meetingRepository.findAll(((root, query, cb) ->
        query.where(cb.or(
                cb.equal(root.joinList("meetingUser").get("id"), authService.getCurrentUser().getId()),
                authService.getPrivilegePredicate(root, cb)))
            .distinct(true)
            .getRestriction()));
  }

  public Meeting findById(Long id) {
    return meetingRepository.findById(id).orElseThrow();
  }

  public Meeting create(Meeting meeting) {
    // todo generate code
    meeting.setCode("HY001");
    User user = authService.getCurrentUser();
    meeting.setUser(user);
    //noinspection ConstantConditions
    if (user.getId().equals(1L)) {
      meeting.setStatus(Status.REVIEWED);
    } else {
      meeting.setStatus(Status.NONE_REVIEW);
    }
    return meetingRepository.saveAndFlush(meeting);
  }

  public Meeting patch(Long id, Status status) {
    var meeting = meetingRepository.findById(id).orElseThrow();
    meeting.setStatus(status);

    if (status == Status.AWAITING_REVIEW) {
      approvalService.generate(Approval.builder()
          .approveUser(approvalService.getDefaultApproveUser())
          .build(), meeting);
    }
    return meeting;
  }

  @Override
  public void onReview(Approval approval) {
    var meeting = approval.getMeeting();
    meeting.setStatus(Status.REVIEWED);
    meetingRepository.save(meeting);
  }

  @Override
  public void onDenied(Approval approval) {

    var meeting = approval.getMeeting();
    meeting.setStatus(Status.AWAITING_FIX);
    meetingRepository.save(meeting);
  }

  @Override
  public void onFixed(Approval approval) {
    var meeting = approval.getMeeting();
    meeting.setStatus(Status.AWAITING_REVIEW);
    meetingRepository.save(meeting);
  }
}
