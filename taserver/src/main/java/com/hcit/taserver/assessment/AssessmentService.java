package com.hcit.taserver.assessment;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AssessmentService {

  private final AssessmentRepository assessmentRepository;

  public Map<Integer, Assessment> getMap() {
    return assessmentRepository.findAll().stream().collect(Collectors.toMap(Assessment::getId, Function.identity()));
  }

  public List<Assessment> getTree() {
    var map = getMap();

    List<Assessment> result = new ArrayList<>();
    for (Assessment asmt : map.values()) {
      var parentId = asmt.getParentId();
      if (parentId == null) {
        result.add(asmt);
        continue;
      }
      Assessment parent = map.get(parentId);
      List<Assessment> children = Optional.ofNullable(parent.getChildren()).orElseGet(ArrayList::new);
      children.add(asmt);
      parent.setChildren(children);
    }
    return result;
  }

}
