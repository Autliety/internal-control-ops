package com.hcit.taserver.department;

import com.hcit.taserver.department.user.Privilege;
import com.hcit.taserver.department.user.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class DepartmentService {

  private final DepartmentRepository departmentRepository;
  private final UserRepository userRepository;

  public List<Department> findAll() {
    return departmentRepository.findAllByIdNotOrderByDeptOrder(-999L);
  }

  public Department create(Department department){
    return departmentRepository.save(department);
  }

  public Department bindData(Department department) {
    department.setDeptUser(userRepository.findByDepartmentAndPrivilege(department, Privilege.DEPT).orElse(null));
    department.setFirstUser(userRepository.findByDepartmentAndPrivilege(department, Privilege.FIRST).orElse(null));
    return department;
  }
}
