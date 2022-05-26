package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import java.util.List;
import java.util.Optional;
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
    var approval = meeting.getApproval();
    meeting.setApproval(null);
    meetingRepository.save(meeting);
    Optional.ofNullable(approval).map(Approval::getApproveUserId).ifPresent(id ->
        meeting.setApproval(approvalService.generate(id, meeting))
    );
    return meeting;
  }

  public void onReviewed(Meeting meeting) {
    meeting.setStatus(Status.REVIEWED);
    meetingRepository.save(meeting);
  }

}
