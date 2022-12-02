package com.hcit.taserver.department;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

  @Transactional
  @PostMapping
  public List<Department> create(@RequestBody Department department) {
    department.setId(null);
    department.setDeptOrder(null);
    departmentService.create(department);
    return departmentService.findAll();
  }


  @PostMapping("/{id}")
  @Transactional
  public Department updateDept(@PathVariable Long id,
                               @RequestBody Department update) {
    Department department = departmentRepository.findById(id).orElseThrow();
    department.setName(update.getName());
    department.setShortName(update.getShortName());
    return departmentRepository.save(department);
  }
}
