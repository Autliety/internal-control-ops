package com.hcit.taserver.ta.plan;

import java.util.List;
import lombok.RequiredArgsConstructor;
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

  /*具体计划CRUD*/
  @GetMapping
  public List<Plan> fetchAll(Plan plan) {
    return planService.findAllByCondition(plan);
  }

  /*具体查询一条计划by计划id*/
  @GetMapping("/{id}")
  public Plan fetch(@PathVariable Long id) {
    return planService.findById(id);
  }

  @PostMapping
  public Plan create(@RequestBody Plan plan) {
    return planService.create(plan);
  }
}
