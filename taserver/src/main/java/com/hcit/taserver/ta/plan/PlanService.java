package com.hcit.taserver.ta.plan;

import com.hcit.taserver.common.Status;
import com.hcit.taserver.ta.task.Task;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

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
    plan.setId(null);
    plan.setCode(null);
    plan.setStatus(Status.AWAITING_REVIEW);
    if (!CollectionUtils.isEmpty(plan.getDetail())) {
      plan.getDetail().forEach(d -> {
        d.setPlan(plan);
        d.setTask(Task.builder()
            .planDetail(d)
            .status(Status.NONE_REVIEW)
            .valueType(d.getValueType())
            .build());
      });
    }
    return planRepository.saveAndFlush(plan);
  }

}
