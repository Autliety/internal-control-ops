package com.hcit.taserver.department;

import com.hcit.taserver.common.BasicPersistableService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class DepartmentService implements BasicPersistableService<Department> {

  private final DepartmentRepository departmentRepository;

  public List<Department> findAll() {
    return departmentRepository.findAllByIdNot(999L);
  }

}
