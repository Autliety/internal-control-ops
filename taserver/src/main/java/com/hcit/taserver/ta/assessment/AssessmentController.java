package com.hcit.taserver.ta.assessment;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import java.util.Collection;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/assessment")
public class AssessmentController {

  private final ObjectMapper objectMapper;
  private final AssessmentService assessmentService;
  private final AssessmentFileService assessmentFileService;

  /*
   * 查询所有指标
   * 和没有计划的指标
   * */
  @GetMapping
  public Collection<?> fetchAll() {
    return assessmentService.findAllWithTree().entrySet().stream().map(e1 ->
        objectMapper.createObjectNode()
            .put("id", e1.getKey())
            .put("name", e1.getKey())
            .set("children", objectMapper.convertValue(e1.getValue().entrySet().stream().map(e2 ->
                objectMapper.createObjectNode()
                    .put("id", e2.getKey() + "L2")
                    .put("name", e2.getKey())
                    .set("children", objectMapper.convertValue(e2.getValue(), ArrayNode.class))
            ).collect(Collectors.toList()), ArrayNode.class))
    ).collect(Collectors.toList());
  }

  @GetMapping("/{id}")
  public Assessment fetch(@PathVariable Long id) {
    return assessmentService.findById(id);
  }

  @PostMapping
  public void test() {
    assessmentFileService.test();
  }

}
