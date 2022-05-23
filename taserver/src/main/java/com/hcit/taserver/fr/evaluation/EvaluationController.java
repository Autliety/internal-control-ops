package com.hcit.taserver.fr.evaluation;

import io.swagger.annotations.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor

@Api(tags = "考评")
@RestController
@RequestMapping("/api/evaluation")
public class EvaluationController {

  private final EvaluationService evaluationService;

  @GetMapping
  public List<Evaluation> fetchAll() {
    return evaluationService.findAll();
  }
}
