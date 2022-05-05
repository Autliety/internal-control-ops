package com.hcit.taserver.department;

import com.hcit.taserver.common.View;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor

@RestController
@RequestMapping("/api/department")
public class DepartmentController {

  private final DepartmentService departmentService;

  @GetMapping
  public List<Department> getAll(@RequestParam(required = false) View view) {
    if (view == View.LIST) {
      return departmentService.findAll();
    } else {
      return departmentService.getTree();
    }
  }
}
