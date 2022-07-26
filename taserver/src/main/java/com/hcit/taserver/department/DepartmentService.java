package com.hcit.taserver.department;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class DepartmentService {

  private final DepartmentRepository departmentRepository;

  public List<Department> findAll() {
    return departmentRepository.findAllByIdNotOrderByDeptOrder(999L);
  }

  public Department create(Department department){
    return departmentRepository.save(department);
  }

}
