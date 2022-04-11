package com.hcit.taserver.measure;


import com.hcit.taserver.assessment.Assessment;
import com.hcit.taserver.assessment.AssessmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PlanService {

  private final AssessmentService assessmentService;
  private final PlanRepository planRepository;

  private final MeasureService measureService;

  public Plan findById(Integer id) {
    Plan plan = planRepository.findById(id).orElseThrow();
    Assessment assessment = assessmentService.findById(id);
    List<Measure> measures = measureService.findAllByPlanId(id);
    plan.setMeasures(measures);
    plan.setAssessment(assessment);
    return plan;
  }


  public List<Plan> findAllByCondition(Plan plan) {
    Specification<Plan> spec = (root, query, cb) -> {
      var deptId = plan.getDeptId() == null ? cb.conjunction() : cb.equal(root.get("deptId"), plan.getDeptId());
      var asmtId = plan.getAsmtId() == null ? cb.conjunction() : cb.equal(root.get("asmtId"), plan.getAsmtId());

      return query.where(cb.and(deptId, asmtId)).getRestriction();

    };
    return planRepository.findAll(spec);
  }
}
