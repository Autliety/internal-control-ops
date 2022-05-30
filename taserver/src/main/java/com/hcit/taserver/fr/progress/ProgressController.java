package com.hcit.taserver.fr.progress;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import io.swagger.annotations.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "履责情况/动态跟踪")
@RequiredArgsConstructor
@RestController
@RequestMapping("/progress")
public class ProgressController {

  private final ProgressService progressService;
  private final ApprovalService approvalService;

  @GetMapping
  public List<Progress> fetchAll() {
    return progressService.findAll();
  }

  @GetMapping("/{id}")
  public Progress fetch(@PathVariable Long id) {
    return progressService.findById(id);
  }

  @PatchMapping("/{id}")
  @Transactional
  public Progress updateProgress(@PathVariable Long id, @RequestBody Progress update) {
    var progress = progressService.update(id, update);
    if (update.getStatus() == Status.AWAITING_REVIEW) {
      progress.setStatus(Status.AWAITING_REVIEW);
      approvalService.generate(update.getApproval(), progress);
    }
    return progress;
  }
}
