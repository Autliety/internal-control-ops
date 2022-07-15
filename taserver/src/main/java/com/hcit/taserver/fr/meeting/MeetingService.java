package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.Privilege;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserRepository;
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
  private final UserRepository userRepository;

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
    meeting.setStatus(Status.NONE_REVIEW);
    meeting.setUser(authService.getCurrentUser());
    return meetingRepository.saveAndFlush(meeting);
  }

  public Meeting patch(Long id, Status status) {
    var meeting = meetingRepository.findById(id).orElseThrow();
    meeting.setStatus(status);

    if (status == Status.AWAITING_REVIEW) {
      User user = meeting.getUser();
      approvalService.generate(Approval.builder()
          .approveUser(Optional.ofNullable(user.getParent())
              .orElseGet(() -> userRepository.findByDepartmentAndPrivilege(user.getDepartment(), Privilege.DEPT)))
          .build(), meeting);
    }
    return meeting;
  }

  public void onReviewed(Meeting meeting) {
    meeting.setStatus(Status.REVIEWED);
    meetingRepository.save(meeting);
  }
}
