package com.hcit.taserver.department;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor

@RestController
@RequestMapping("/department")
public class DepartmentController {

  private final DepartmentService departmentService;

  @GetMapping
  public List<Department> getAll() {
    return departmentService.getTree();
  }

}
