package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.matter.MatterService;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeetingService {

  private final MeetingRepository meetingRepository;
  private final AuthService authService;
  private final MatterService matterService;

  public List<Meeting> findAll() {
    return meetingRepository.findAll(((root, query, cb) ->
        query.where(cb.or(
            cb.equal(root.joinList("meetingUser").get("id"), authService.getCurrentUser().getId()),
            authService.getPrivilegePredicate(root, cb))
        ).getRestriction()));
  }

  public Meeting findById(Long id) {
    return meetingRepository.findById(id).orElseThrow();
  }

  public Meeting create(Meeting meeting) {
    // todo generate code
    meeting.setCode("HY001");
    meeting.setStatus(Status.REVIEWED);
    meeting.setUser(authService.getCurrentUser());
    return meeting;
  }

  public Meeting patch(Long id, Status status) {
    var meeting = meetingRepository.findById(id).orElseThrow();
    meeting.setStatus(status);
    meetingRepository.save(meeting);

    if (status == Status.FINISHED) {
      var matters = new ArrayList<Matter>();
      for (var t : meeting.getTopic()) {
        for (var ta : t.getTask()) {
          if (BooleanUtils.isTrue(ta.getIsMatter())) {
            Matter m = Matter.builder()
                .content(ta.getContent())
                .user(t.getUser())
                .build();
            matters.add(m);
          }
        }
      }
      matterService.create(matters);
    }
    return meeting;
  }

}
