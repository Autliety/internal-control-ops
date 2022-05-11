package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.UserService;
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
  private final MeetingRepository meetingRepository;
  private final AuthService authService;
  private final UserService userService;

  @Override
  public Topic bindData(Topic entity) {
    entity.setMeeting(meetingRepository.findById(entity.getMeetingId()).orElseThrow());
    entity.setMatter(matterRepository.findAllBySourceAndSourceId(MatterSource.MEETING_TOPIC, entity.getId()));
    entity.setUser(userService.findById(entity.getUserId()));
    return entity;
  }

  public Topic findById(Long id) {
    return bindData(topicRepository.findById(id).orElseThrow());
  }

  public List<Topic> findAllByMeetingId(Long id) {
    return bindData(topicRepository.findAllByMeetingId(id));
  }

  public Topic create(Topic topic) {
    topic.setStatus(Status.AWAITING_REVIEW);
    topic.setUserId(authService.getCurrentUser().getId());
    Long topicId = topicRepository.save(topic).getId();
    topic.getMatter().forEach(m -> {
      m.setId(null);
      m.setSource(MatterSource.MEETING_TOPIC);
      m.setSourceId(topicId);
      m.setStatus(Status.AWAITING_REVIEW);
      m.setUserId(30L);
      m.setCode("WT001");
    });
    topic.setMatter(matterRepository.saveAll(topic.getMatter()));
    return topic;
  }

  @Deprecated
  public Topic update(Long id) {
    var t = topicRepository.findById(id).orElseThrow();
    t.setStatus(Status.REVIEWED);
    return bindData(topicRepository.save(t));
  }
}
