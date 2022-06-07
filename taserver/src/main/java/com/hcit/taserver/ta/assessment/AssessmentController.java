package com.hcit.taserver.ta.assessment;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
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
  public JsonNode fetchAll() {
    // todo 格式
    return objectMapper.convertValue(assessmentService.findAllWithTree(), ObjectNode.class);
  }

  @GetMapping("/{id}")
  public Assessment fetch(@PathVariable Integer id) {
    return assessmentService.findById(id);
  }

  @PostMapping
  public void test() {
    assessmentFileService.test();
  }

}
