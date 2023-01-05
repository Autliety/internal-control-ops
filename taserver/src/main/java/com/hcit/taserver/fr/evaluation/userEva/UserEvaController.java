package com.hcit.taserver.fr.evaluation.userEva;

import com.hcit.taserver.fr.evaluation.userEva.entity.UpdateType;
import com.hcit.taserver.fr.evaluation.userEva.entity.UserEvaListDto;
import com.hcit.taserver.fr.evaluation.userEva.entity.UserEvaluation;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/usereva")
public class UserEvaController {

  private final UserEvaService userEvaService;
  private final UserEvaAutoService userEvaAutoService;

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

  @GetMapping
  public List<UserEvaListDto> getEvaList() {
    return userEvaService.findAllByUserPrivilege();
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
