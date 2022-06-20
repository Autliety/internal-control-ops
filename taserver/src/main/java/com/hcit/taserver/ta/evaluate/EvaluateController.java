package com.hcit.taserver.ta.evaluate;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/evaluate")
public class EvaluateController {

  private final EvaluateService evaluateService;

  @GetMapping("/{userId}")
  public Evaluate fetch(@PathVariable Long userId) {
    return evaluateService.evaluate(userId);
  }

  @GetMapping
  public List<Evaluate> fetch() {
    return evaluateService.evaluate();
  }

}
