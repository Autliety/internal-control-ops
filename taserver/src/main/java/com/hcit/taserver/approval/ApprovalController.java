package com.hcit.taserver.approval;

import com.hcit.taserver.fr.matter.MatterService;
import com.hcit.taserver.fr.meeting.MeetingService;
import com.hcit.taserver.fr.meeting.TopicService;
import com.hcit.taserver.fr.progress.ProgressService;
import com.hcit.taserver.ta.plan.PlanService;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/approval")
public class ApprovalController {

  private final ApprovalService approvalService;
  private final TopicService topicService;
  private final MatterService matterService;
  private final ProgressService progressService;
  private final PlanService planService;
  private final MeetingService meetingService;

  @GetMapping(params = {"current"})
  public List<Approval> fetchCurrent(@RequestParam boolean current) {
    // todo notice
    return null;
  }

  @GetMapping("/{id}")
  public Approval fetch(@PathVariable Long id) {
    return approvalService.findById(id);
  }

  @PatchMapping("/{id}")
  @Transactional
  public Approval updateStep(@PathVariable Long id, @RequestBody(required = false) ApprovalStep body) {
    String content = Optional.ofNullable(body).map(ApprovalStep::getContent).orElse(null);
    var approval = approvalService.stepIn(id, content);

    // todo: move onReviewed to better place
    if (approval.getMeetingTopic() != null) {
      topicService.onReviewed(approval.getMeetingTopic());
    } else if (!CollectionUtils.isEmpty(approval.getMatter())) {
      matterService.onReviewed(approval.getMatter());
    } else if (approval.getProgress() != null) {
      progressService.onReviewed(approval.getProgress());
    } else if (approval.getPlan() != null) {
      planService.onReviewed(approval.getPlan());
    } else if (approval.getMeeting() != null) {
      meetingService.onReviewed(approval.getMeeting());
    }
    return approval;
  }
}
