package com.hcit.taserver.ta.assessment;

import com.hcit.taserver.common.View;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
  public List<Assessment> fetchAssessments(@RequestParam(required = false) View view,
                                           @RequestParam(required = false) Boolean nonPlanned) {
    if (view == View.LIST) {
      return assessmentService.findAll();
    }
    if (nonPlanned == null || nonPlanned.equals(Boolean.FALSE)) {
      return assessmentService.getTree();
    } else {
      throw new UnsupportedOperationException();
    }
  }

  @GetMapping("/{id}")
  public Assessment fetch(@PathVariable Integer id) {
    return assessmentService.findById(id);
  }

}
