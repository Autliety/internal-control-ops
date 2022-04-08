package com.hcit.taserver.measure;


import com.hcit.taserver.assessment.Assessment;
import com.hcit.taserver.assessment.AssessmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlanService {

  private final AssessmentService assessmentService;
  private final PlanRepository planRepository;

  private final MeasureService measureService;

  public Plan findById(Integer id) {
    Plan plan = planRepository.findById(id).get();
    Assessment assessment = assessmentService.findById(plan.getAsmtId());
    List<Measure> measures = measureService.findAllByPlanId(id);
    plan.setMeasures(measures);
    plan.setAssessment(assessment);
    return plan;
  }

  public List<Plan> findAll() {
    List<Plan> plans = planRepository.findAll();
    return plans;
  }
}
