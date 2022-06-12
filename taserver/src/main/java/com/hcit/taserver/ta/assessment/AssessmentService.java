package com.hcit.taserver.ta.assessment;

import com.hcit.taserver.department.Department;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AssessmentService {

  private final AssessmentRepository assessmentRepository;
  private final AuthService authService;

  public Map<String, Map<String, List<Assessment>>> toTree(List<Assessment> list) {
    Map<String, Map<String, List<Assessment>>> l1Map = new LinkedHashMap<>();
    for (Assessment a : list) {
      l1Map.putIfAbsent(a.getLevelOne(), new LinkedHashMap<>());
      var l2Map = l1Map.get(a.getLevelOne());
      l2Map.putIfAbsent(a.getLevelTwo(), new ArrayList<>());
      var l3List = l2Map.get(a.getLevelTwo());
      l3List.add(a);
    }
    return l1Map;
  }

  // todo better filter
  @SuppressWarnings("ConstantConditions")
  public List<Assessment> demoFilteredFindAll() {
    var user = authService.getCurrentUser();
    var list = assessmentRepository.findAll();

    var id = authService.getCurrentUser().getId().intValue();
    if (id >= 3 && id <= 27) {
      return list.stream()
          .filter(a -> a.getRespUser().stream().map(User::getId).anyMatch(i -> i.equals(user.getId())))
          .collect(Collectors.toList());
    } else if (id <= 29 || id == 999) {
      return assessmentRepository.findAll();
    } else {
      return list.stream()
          .filter(a -> a.getRespDepartment().stream().map(Department::getId).anyMatch(i -> i.equals(user.getDepartment().getId())))
          .collect(Collectors.toList());
    }
  }

  public Assessment findById(Long id) {
    return assessmentRepository.findById(id).orElseThrow();
  }

}
