package com.hcit.taserver.ta.plan;


import com.hcit.taserver.ta.assessment.Assessment;
import com.hcit.taserver.ta.assessment.AssessmentService;
import com.hcit.taserver.department.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PlanService {

  private final PlanRepository planRepository;
  private final PlanDetailRepository planDetailRepository;
  private final AssessmentService assessmentService;
  private final DepartmentService departmentService;

  public Plan findById(Integer id) {
    return planRepository.findById(id)
        .map(this::bindData)
        .orElse(null);
  }

  public List<Plan> findAllByCondition(Plan plan) {
    Specification<Plan> spec = (root, query, cb) -> {
      var deptId = plan.getDeptId() == null ? cb.conjunction() : cb.equal(root.get("deptId"), plan.getDeptId());
      var asmtId = plan.getAsmtId() == null ? cb.conjunction() : cb.equal(root.get("asmtId"), plan.getAsmtId());

      return query.where(cb.and(deptId, asmtId)).getRestriction();

    };
    return (List<Plan>)bindData(planRepository.findAll(spec));
  }

  private Plan bindData(Plan input) {
    Assessment assessment = assessmentService.findById(input.getAsmtId());
    input.setAssessment(assessment);
    List<PlanDetail> measures = planDetailRepository.findAllByPlanId(input.getId());
    input.setDetails(measures);
    var department = departmentService.getOne(input.getDeptId());
    input.setDepartment(department);
    return input;
  }

  /**
   * 批量给plan绑定measures和assessment
   * @param input 未绑定数据的plan
   * @return 绑定数据后的原对象
   */
  private Collection<Plan> bindData(Collection<Plan> input) {
    input.forEach(this::bindData); // todo: 优化
    return input;
  }

}