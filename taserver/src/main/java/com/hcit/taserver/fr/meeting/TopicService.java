package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TopicService {

  private final TopicRepository topicRepository;
  private final AuthService authService;
  private final ApprovalService approvalService;

  public Topic findById(Long id) {
    return topicRepository.findById(id).orElseThrow();
  }

  public Topic create(Topic topic) {
    topic.setUser(authService.getCurrentUser());
    topic.setStatus(Status.AWAITING_REVIEW);
    topic.getTask().forEach(t -> t.setTopic(topic));
    approvalService.generate(topic.getApproval(), topic);
    return topic;
  }

  public void onReviewed(Topic topic) {
    topic.setStatus(Status.REVIEWED);
    topicRepository.save(topic);
  }

}
