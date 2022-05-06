package com.hcit.taserver.department;

import com.hcit.taserver.common.BasicPersistableService;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class DepartmentService implements BasicPersistableService<Department> {

  private final DepartmentRepository departmentRepository;

  public List<Department> findAll() {
    return departmentRepository.findAll();
  }

  public List<Department> getTree() {
    var map = BasicPersistableService.ToMap(findAll());

    List<Department> result = new ArrayList<>();
    for (Department dept : map.values()) {
      Long parentId = dept.getParentId();
      if (parentId == null) {
        result.add(dept);
        continue;
      }
      Department parent = map.get(parentId);
      Collection<Department> children = parent.getChildren();
      if (children == null) {
        children = new ArrayList<>();
      }
      children.add(dept);
      parent.setChildren(children);
    }
    return result;
  }

}
