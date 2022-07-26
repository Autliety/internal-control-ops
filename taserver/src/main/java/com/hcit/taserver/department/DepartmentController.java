package com.hcit.taserver.department;

import java.util.List;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor

@RestController
@RequestMapping("/department")
public class DepartmentController {

  private final DepartmentService departmentService;

  private final DepartmentRepository departmentRepository;


  @GetMapping
  // todo fix the params temp
  public List<Department> getAll(@RequestParam(required = false, defaultValue = "0") Integer filtered) {
    if (filtered == 1) {
      return departmentService.findAll().subList(0, 4);
    }
    if (filtered == 2) {
      return departmentService.findAll().subList(4, 18);
    }
    return departmentService.findAll();
  }

  @ApiOperation("新建部门岗位")
  @PostMapping
  public List<Department> create(@RequestBody Department department) {
    department.setId(null);
    department.setDeptOrder(null);
    departmentService.create(department);
    return departmentService.findAll();
  }


  @ApiOperation("编辑部门岗位信息")
  @PostMapping("/{id}")
  @Transactional
  public Department updateDept(@PathVariable Long id,
                               @RequestBody Department update) {
    Department department = departmentRepository.findById(id).get();
    department.setName(update.getName());
    department.setShortName(update.getShortName());
    return departmentRepository.save(department);
  }
}
