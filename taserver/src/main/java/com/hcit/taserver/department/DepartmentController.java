package com.hcit.taserver.department;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor

@RestController
@RequestMapping("/department")
public class DepartmentController {

  private final DepartmentService departmentService;

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
}
