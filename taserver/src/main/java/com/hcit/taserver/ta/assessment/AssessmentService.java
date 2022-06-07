package com.hcit.taserver.ta.assessment;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AssessmentService {

  private final AssessmentRepository assessmentRepository;

  public Map<String, Map<String, List<Assessment>>> findAllWithTree() {
    Map<String, Map<String, List<Assessment>>> l1Map = new HashMap<>();
    for (Assessment a : assessmentRepository.findAll()) {
      l1Map.putIfAbsent(a.getLevelOne(), new HashMap<>());
      var l2Map = l1Map.get(a.getLevelOne());
      l2Map.putIfAbsent(a.getLevelTwo(), new ArrayList<>());
      var list = l2Map.get(a.getLevelTwo());
      list.add(a);
    }
    return l1Map;
  }

  public List<Assessment> findAll() {
    return assessmentRepository.findAll();
  }

  public Assessment findById(Integer id) {
    return assessmentRepository.findById(id).orElseThrow();
  }

}
