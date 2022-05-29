package com.hcit.taserver.fr.notification;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalService;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/notification")
public class NotificationController {

  private final ApprovalService approvalService;

  @GetMapping("/uat")
  public Map<Object, List<Approval>> fetchNotifies() {
    return approvalService.getCurrentUserApproved()
        .stream()
        .collect(Collectors.groupingBy(a -> a.getStatus().toString()));
  }
}
