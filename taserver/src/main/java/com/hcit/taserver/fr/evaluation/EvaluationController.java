package com.hcit.taserver.fr.evaluation;

import com.hcit.taserver.fr.evaluation.userEva.UpdateType;
import com.hcit.taserver.fr.evaluation.userEva.UserEvaAutoService;
import com.hcit.taserver.fr.evaluation.userEva.UserEvaService;
import com.hcit.taserver.fr.evaluation.userEva.UserEvaluation;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor

@RestController
@RequestMapping("/evaluation")
public class EvaluationController {

  private final EvaluationService evaluationService;
  private final UserEvaService userEvaService;
  private final UserEvaAutoService userEvaAutoService;

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
  public List<UserEvaluation> selfEvaluation(@RequestBody List<UserEvaluation> evaluations) {
    return userEvaService.updateEvaluation(evaluations, UpdateType.SELF, null);
  }

  @PostMapping(params = {"userId"})
  public List<UserEvaluation> leaderEvaluation(@RequestParam Long userId,
      @RequestBody List<UserEvaluation> evaluations) {
    return userEvaService.updateEvaluation(evaluations, UpdateType.LEADER, userId);
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
  public void evaluationUser() {
    userEvaAutoService.autoEvaluations();
  }
}
