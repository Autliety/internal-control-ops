package com.hcit.taserver.approval;

import com.hcit.taserver.common.Status;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
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
@RequestMapping("/approval")
public class ApprovalController {

  private final ApprovalService approvalService;

  @GetMapping(params = {"current"})
  public Map<Status, List<Approval>> fetchCurrent(@RequestParam boolean current) {
    if (current) {
      return approvalService.getCurrentUserApproved()
          .stream()
          .collect(Collectors.groupingBy(Approval::getStatus));
    } else {
      throw new UnsupportedOperationException();
    }
  }

  @GetMapping("/{id}")
  public Approval fetch(@PathVariable Long id) {
    return approvalService.findById(id);
  }

  @PatchMapping("/{id}")
  @Transactional
  public Approval updateStep(@PathVariable Long id, @RequestBody ApprovalStep body) {
    var status = body.getStatus();
    var content = body.getContent();
    return approvalService.stepIn(id, status, content);
  }
}
