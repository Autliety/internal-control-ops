package com.hcit.taserver.measure;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PlanService {

  private final PlanRepository planRepository;

  private final MeasureService measureService;

  public Plan findById(Integer id) {
    Plan plan = planRepository.findById(id).get();
    List<Measure> measures = measureService.findAllByPlanId(id);
    plan.setMeasures(measures);
    return plan;
  }

  public List<Plan> findAll(){
    List<Plan> plans = planRepository.findAll();
    return plans;
  }
}
