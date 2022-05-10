package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeetingService implements BasicPersistableService<Meeting> {

  private final MeetingRepository meetingRepository;
  private final TopicService topicService;
  private final UserRepository userRepository;
  private final AuthService authService;

  public List<Meeting> findAll() {
    return meetingRepository.findAll();
  }

  public Meeting findById(Long id) {
    return bindData(meetingRepository.findById(id).orElseThrow());
  }

  public Meeting create(Meeting meeting) {
    // todo generate code
    meeting.setCode("HY001");
    meeting.setStatus(Status.AWAITING_REVIEW);
    meeting.setUserId(authService.getCurrentUser().getId());
    return meetingRepository.save(meeting);
  }

  @Override
  public Meeting bindData(Meeting entity) {
    entity.setUser(userRepository.findById(entity.getUserId()).orElseThrow());
    entity.setMeetingUser(userRepository.findAllById(entity.getMeetingUserId()));
    entity.setTopic(topicService.findAllByMeetingId(entity.getId()));
    return entity;
  }

  @Deprecated
  public Meeting update(Long id, Boolean done) {
    var m = meetingRepository.findById(id).orElseThrow();
    m.setStatus(Status.REVIEWED);
    if (BooleanUtils.isTrue(done)) {
      m.setStatus(Status.FINISHED);
    }
    return bindData(meetingRepository.save(m));
  }
}
