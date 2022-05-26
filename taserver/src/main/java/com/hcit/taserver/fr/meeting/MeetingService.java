package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeetingService {

  private final MeetingRepository meetingRepository;
  private final AuthService authService;
  private final ApprovalService approvalService;

  public List<Meeting> findAll() {
    return meetingRepository.findAll();
  }

  public Meeting findById(Long id) {
    return meetingRepository.findById(id).orElseThrow();
  }

  public Meeting create(Meeting meeting) {
    // todo generate code
    meeting.setCode("HY001");
    meeting.setStatus(Status.AWAITING_REVIEW);
    meeting.setUser(authService.getCurrentUser());
    approvalService.generate(meeting.getApproval().getApproveUserId(), meeting);
    return meeting;
  }

  public Meeting patch(Long id, Status status) {
    var meeting = meetingRepository.findById(id).orElseThrow();
    meeting.setStatus(status);
    return meetingRepository.save(meeting);
  }

  public void onReviewed(Meeting meeting) {
    meeting.setStatus(Status.REVIEWED);
    meetingRepository.save(meeting);
  }

}
