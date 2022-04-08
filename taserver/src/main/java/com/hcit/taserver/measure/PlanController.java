package com.hcit.taserver.measure;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;


import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/plan")
public class PlanController {

  private final PlanService planService;

  /*具体计划CRUD*/
  @GetMapping
  public List<Plan> fetchAll(@RequestParam(required = false) Integer deptId,
                            @RequestParam(required = false) Integer asmtId) {
    return planService.findAll();
  }
  /*具体查询一条计划by计划id*/
  @GetMapping("/{id}")
  public Plan fetch(@PathVariable Integer id) {
    return planService.findById(id);
  }
}
