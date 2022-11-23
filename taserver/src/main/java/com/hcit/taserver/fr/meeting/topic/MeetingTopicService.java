package com.hcit.taserver.fr.meeting.topic;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.department.user.AuthService;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeetingTopicService {

  private final MeetingTopicRepository meetingTopicRepository;
  private final AuthService authService;
  private final ApprovalService approvalService;

  public MeetingTopic findById(Long id) {
    return meetingTopicRepository.findById(id).orElseThrow();
  }

  public MeetingTopic create(MeetingTopic input) {
    var topic = meetingTopicRepository.save(MeetingTopic.builder()
        .meeting(input.getMeeting())
        .user(authService.getCurrentUser())
        .build());
    approvalService.generate(a -> a.withApprovalType("meetingTopic").withMeetingTopic(topic), false);
    return topic;
  }

  public MeetingTopic update(Long id, MeetingTopic update) {
    MeetingTopic topic = meetingTopicRepository.findById(id).orElseThrow();
    if (!Objects.equals(topic.getId(), update.getId())) {
      throw new IllegalArgumentException("id不匹配");
    }
    var tasks = update.getTask();
    tasks.forEach(t -> t.setTopic(topic));
    topic.getTask().clear();
    topic.setTask(tasks);
    return meetingTopicRepository.save(topic);
  }
}
