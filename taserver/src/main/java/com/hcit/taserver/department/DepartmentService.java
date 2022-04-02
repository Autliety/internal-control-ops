package com.hcit.taserver.department;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class DepartmentService {

  private final DepartmentRepository departmentRepository;

  public Map<Integer, Department> getDeptMap() {
    return departmentRepository.findAll()
        .stream()
        .collect(Collectors.toMap(
            Department::getId,
            Function.identity()));
  }

  public List<Department> getAll() {
    Map<Integer, Department> map = getDeptMap();

    List<Department> result = new ArrayList<>();
    for (Department dept : map.values()) {
      Integer parentId = dept.getParentId();
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

  public Department getOne(Integer id) {
    return departmentRepository.findById(id).get();
  }
}
