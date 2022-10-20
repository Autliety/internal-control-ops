package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeetingService {

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
    User user = authService.getCurrentUser();
    meeting.setUser(user);
    meeting.setStatus(null);
    meetingRepository.save(meeting);
    approvalService.generate(a -> a.withApprovalType("meeting").withMeeting(meeting));
    return meeting;
  }

  public Meeting update(Long id, Meeting update) {
    var meeting = meetingRepository.findById(id).orElseThrow();
    if (!Objects.equals(meeting.getId(), update.getId())) {
      throw new IllegalArgumentException("id不匹配");
    }
    if (update.getStatus() == Status.FINISHED) {
      meeting.setStatus(update.getStatus());
    }
    meeting.setPlacement(update.getPlacement());
    meeting.setContent(update.getContent());
    meeting.setStartTime(update.getStartTime());
    meeting.setMeetingUser(update.getMeetingUser());
    meeting.setSubUser(update.getSubUser());
    meetingRepository.save(meeting);
    return update;
  }

}
