package com.hcit.taserver.ta.plan;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalAdaptor;
import com.hcit.taserver.common.Status;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlanService implements ApprovalAdaptor {

  private final PlanRepository planRepository;

  public Plan findById(Long id) {
    return planRepository.findById(id).orElseThrow();
  }

  public Plan create(Plan plan) {
    return planRepository.saveAndFlush(plan);
  }

  public void onReviewed(Plan plan) {
  }

  @Override
  public void onReview(Approval approval) {
    var plan = approval.getPlan();
    plan.setStatus(Status.REVIEWED);
    planRepository.save(plan);
  }

  @Override
  public void onDenied(Approval approval) {
    var plan = approval.getPlan();
    plan.setStatus(Status.AWAITING_FIX);
    planRepository.save(plan);
  }

  @Override
  public void onFixed(Approval approval) {
    var plan = approval.getPlan();
    plan.setStatus(Status.AWAITING_REVIEW);
    planRepository.save(plan);
  }
}
