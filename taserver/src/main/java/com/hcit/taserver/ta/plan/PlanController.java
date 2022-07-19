package com.hcit.taserver.ta.plan;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.ta.assessment.AssessmentService;
import com.hcit.taserver.ta.task.Task;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/plan")
public class PlanController {

  private final PlanService planService;
  private final AssessmentService assessmentService;
  private final ApprovalService approvalService;

  /*具体计划CRUD*/
  @GetMapping
  public List<Plan> fetchAll() {
    return assessmentService.demoFilteredFindAll().stream().flatMap(a -> a.getPlan().stream()).collect(Collectors.toList());
  }

  /*具体查询一条计划by计划id*/
  @GetMapping("/{id}")
  public Plan fetch(@PathVariable Long id) {
    return planService.findById(id);
  }

  @PostMapping
  public Plan create(@RequestBody Plan plan) {
    plan.setId(null);
    plan.setCode("JH2022-0001"); // todo generate code
    plan.setStatus(Status.AWAITING_REVIEW);
    if (!CollectionUtils.isEmpty(plan.getDetail())) {
      plan.getDetail().forEach(d -> {
        d.setPlan(plan);
        d.setTask(Task.builder()
            .planDetail(d)
            .progress(0)
            .status(Status.NONE_REVIEW)
            .valueType(d.getValueType())
            .build());
      });
    }
    plan.setApproval(approvalService.generate(Approval.builder().approveUser(User.builder().id(plan.getApproval().getApproveUser().getId()).build()).build(), plan));
    return planService.create(plan);
  }
}
