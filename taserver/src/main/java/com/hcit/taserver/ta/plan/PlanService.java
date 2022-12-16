package com.hcit.taserver.ta.plan;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
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
    var approveUser = plan.getApproval().getApproveUser();
    plan.setApproval(null);
    var p = planRepository.save(plan);
    var approval = approvalService.generate(a -> a.withApprovalType("plan").withPlan(p), approveUser, null);
    approvalService.stepIn(approval.getId(), Status.AWAITING_REVIEW, null);
    return p;
  }

}
