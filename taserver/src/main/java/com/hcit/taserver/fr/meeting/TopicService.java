package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.department.UserRepository;
import com.hcit.taserver.fr.matter.MatterRepository;
import com.hcit.taserver.fr.matter.MatterSource;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TopicService implements BasicPersistableService<Topic> {

  private final TopicRepository topicRepository;
  private final MatterRepository matterRepository;
  private final UserRepository userRepository;
  private final MeetingRepository meetingRepository;

  public Topic findById(Long id) {
    return bindData(topicRepository.findById(id).orElseThrow());
  }

  public List<Topic> findAllByMeetingId(Long id) {
    return bindData(topicRepository.findAllByMeetingId(id));
  }

  @Override
  public Topic bindData(Topic entity) {
    entity.setMeeting(meetingRepository.findById(entity.getMeetingId()).orElseThrow());
    entity.setMatter(matterRepository.findAllBySourceAndSourceId(MatterSource.MEETING_TOPIC, entity.getId()));
    entity.setUser(userRepository.findById(entity.getUserId()).orElseThrow());
    return entity;
  }

}
