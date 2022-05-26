package com.hcit.taserver.approval;

import com.hcit.taserver.fr.matter.MatterService;
import com.hcit.taserver.fr.meeting.MeetingService;
import com.hcit.taserver.fr.meeting.TopicService;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/approval")
public class ApprovalController {

  private final ApprovalService approvalService;
  private final MeetingService meetingService;
  private final TopicService topicService;
  private final MatterService matterService;

  @GetMapping(params = {"current"})
  public List<Approval> fetchCurrent(@RequestParam boolean current) {
    // todo notice
    return null;
  }

  @PatchMapping("/{id}")
  @Transactional
  public Approval updateStep(@PathVariable Long id, @RequestBody(required = false) ApprovalStep body) {
    String content = Optional.ofNullable(body).map(ApprovalStep::getContent).orElse(null);
    var approval = approvalService.stepIn(id, content);

    // todo: move onReviewed to better place
    if (approval.getMeeting() != null) {
      meetingService.onReviewed(approval.getMeeting());
    } else if (approval.getMeetingTopic() != null) {
      topicService.onReviewed(approval.getMeetingTopic());
    } else if (approval.getMatter() != null) {
      matterService.onReviewed(approval.getMatter());
    }
    return approval;
  }
}
