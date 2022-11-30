package com.hcit.taserver.ta.plan;

import com.hcit.taserver.approval.ApprovalService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlanService {

  private final PlanRepository planRepository;
  private final ApprovalService approvalService;

  public Plan findById(Long id) {
    return planRepository.findById(id).orElseThrow();
  }

  public Plan create(Plan plan) {
    var p = planRepository.save(plan);
    approvalService.generate(a -> a.withApprovalType("plan").withPlan(p));
    return p;
  }

}
