package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeetingService implements BasicPersistableService<Meeting> {

  private final MeetingRepository meetingRepository;
  private final TopicService topicService;
  private final UserRepository userRepository;

  public List<Meeting> findAll() {
    return meetingRepository.findAll();
  }

  public Meeting findById(Long id) {
    return bindData(meetingRepository.findById(id).orElseThrow());
  }

  public Meeting save(Meeting meeting) {
    // todo generate code
    meeting.setStatus(Status.AWAITING_REVIEW);
    return meetingRepository.save(meeting);
  }

  @Override
  public Meeting bindData(Meeting entity) {
    entity.setUser(userRepository.findAllById(entity.getUserId()));
    entity.setTopic(topicService.findAllByMeetingId(entity.getId()));
    return entity;
  }
}
