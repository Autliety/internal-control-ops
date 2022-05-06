package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.department.UserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeetingService implements BasicPersistableService<Meeting> {

  private final MeetingRepository meetingRepository;
  private final TopicRepository topicRepository;
  private final UserService userService;

  public List<Meeting> findAll() {
    return meetingRepository.findAll();
  }

  public Meeting findById(Long id) {
    return bindData(meetingRepository.findById(id).orElseThrow());
  }

  public Meeting save(Meeting meeting) {
    // todo generate code
    return meetingRepository.save(meeting);
  }

  @Override
  public Meeting bindData(Meeting entity) {
    entity.setUser(userService.findAllById(entity.getUserId()));
    entity.setTopic(topicRepository.findAllByMeetingId(entity.getId()));
    return entity;
  }
}
