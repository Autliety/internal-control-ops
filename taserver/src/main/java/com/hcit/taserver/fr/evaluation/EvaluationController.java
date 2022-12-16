package com.hcit.taserver.fr.evaluation;

import com.hcit.taserver.fr.evaluation.userEva.UserEvaService;
import com.hcit.taserver.fr.evaluation.userEva.UserEvaluation;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor

@RestController
@RequestMapping("/evaluation")
public class EvaluationController {

  private final EvaluationService evaluationService;
  private final UserEvaService userEvaService;

  @GetMapping
  public List<Evaluation> fetchAll() {
    return evaluationService.findAll();
  }

  /**/
  @GetMapping("/{page}")
  public List<Evaluation> fetch(@PathVariable Integer page) {
    return evaluationService.findAllByPage(page);
  }

  @PostMapping
  @Transactional
  public List<UserEvaluation> selfEvaluation(@RequestBody List<UserEvaluation> evaluations){
    return userEvaService.evaluation(evaluations, null);
  }

  @PostMapping(params = {"userId"})
  public List<UserEvaluation> leaderEvaluation(@RequestParam Long userId, @RequestBody List<UserEvaluation> evaluations){
    return userEvaService.evaluation(evaluations,userId);
  }

  @GetMapping("/score")
  public List<UserEvaluation> getSelfEvaluation() {
    return userEvaService.findAllByUserId(null);
  }

  @GetMapping(value = "/score", params = {"userId"})
  public List<UserEvaluation> getOtherEvaluation(@RequestParam Long userId) {
    return userEvaService.findAllByUserId(userId);
  }

  @GetMapping("/evaluationUser")
  public void evaluationUser(){
    userEvaService.evaluationAllUser();
  }
}
