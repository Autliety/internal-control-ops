package com.hcit.taserver.approval;

import java.util.List;
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
  public Approval updateStep(@PathVariable Long id, @RequestBody ApprovalStep body) {
    var status = body.getStatus();
    var content = body.getContent();
    return approvalService.stepIn(id, status, content);
  }
}
