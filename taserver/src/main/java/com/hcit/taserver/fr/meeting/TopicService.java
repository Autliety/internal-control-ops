package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.UserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TopicService implements BasicPersistableService<Topic> {

  private final TopicRepository topicRepository;
  private final MeetingRepository meetingRepository;
  private final AuthService authService;
  private final UserService userService;

  @Override
  public Topic bindData(Topic entity) {
    entity.setMeeting(meetingRepository.findById(entity.getMeetingId()).orElseThrow());
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
    return topicRepository.save(topic);
  }

  @Deprecated
  public Topic update(Long id) {
    var t = topicRepository.findById(id).orElseThrow();
    t.setStatus(Status.REVIEWED);
    return bindData(topicRepository.save(t));
  }
}
