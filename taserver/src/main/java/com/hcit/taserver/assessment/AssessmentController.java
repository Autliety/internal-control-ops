package com.hcit.taserver.assessment;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.experimental.UtilityClass;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.OperationNotSupportedException;

@RequiredArgsConstructor
@RestController
@RequestMapping("/assessment")
public class AssessmentController {

  private final AssessmentService assessmentService;

  /*
  * 查询所有指标
  * 和没有计划的指标
  * */
  @GetMapping
  public List<Assessment> fetchAssessments(@RequestParam(required = false) Integer deptId,
                                           @RequestParam(required = false) Boolean nonPlanned) {
    if (nonPlanned == null || nonPlanned.equals(Boolean.FALSE)) {
      return assessmentService.getTree();
    } else {
      throw new UnsupportedOperationException();
    }

  }

}
