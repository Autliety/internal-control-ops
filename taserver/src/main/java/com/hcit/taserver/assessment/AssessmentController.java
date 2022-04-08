package com.hcit.taserver.assessment;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/assessment")
public class AssessmentController {

  private final AssessmentService assessmentService;

  @GetMapping
  public List<Assessment> fetchAssessments(@RequestParam(required = false) Integer deptId) {
    return assessmentService.getTree();
  }
}
