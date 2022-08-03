package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalAdaptor;
import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TopicService implements ApprovalAdaptor {

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

  @Override
  public void onReview(Approval approval) {
    var topic = approval.getMeetingTopic();
    topic.setStatus(Status.REVIEWED);
    topicRepository.save(topic);
  }

  @Override
  public void onDenied(Approval approval) {
    var topic = approval.getMeetingTopic();
    topic.setStatus(Status.AWAITING_FIX);
    topicRepository.save(topic);
  }

  @Override
  public void onFixed(Approval approval) {
    var topic = approval.getMeetingTopic();
    topic.setStatus(Status.AWAITING_REVIEW);
    topicRepository.save(topic);
  }
}
