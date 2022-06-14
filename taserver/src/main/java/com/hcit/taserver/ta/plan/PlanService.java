package com.hcit.taserver.ta.plan;

import com.hcit.taserver.common.Status;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlanService {

  private final PlanRepository planRepository;

  public Plan findById(Long id) {
    return planRepository.findById(id).orElseThrow();
  }

  public List<Plan> findAllByCondition(Plan plan) {
    Specification<Plan> spec = (root, query, cb) -> {
      var deptId = plan.getDepartment() == null ? cb.conjunction()
          : cb.equal(root.get("department").get("id"), plan.getDepartment().getId());
      var asmtId = plan.getAssessment() == null ? cb.conjunction()
          : cb.equal(root.get("assessment").get("id"), plan.getAssessment().getId());
      return query.where(cb.and(deptId, asmtId)).getRestriction();
    };
    return planRepository.findAll(spec);
  }

  public Plan create(Plan plan) {
    return planRepository.saveAndFlush(plan);
  }

  public void onReviewed(Plan plan) {
    plan.setStatus(Status.REVIEWED);
    planRepository.save(plan);
  }
}
