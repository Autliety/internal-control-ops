package com.hcit.taserver.ta.evaluate;

import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserService;
import com.hcit.taserver.ta.assessment.Assessment;
import com.hcit.taserver.ta.assessment.AssessmentRepository;
import com.hcit.taserver.ta.assessment.AssessmentService;
import com.hcit.taserver.ta.external.ExternalUsageRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class EvaluateService {

  private final UserService userService;
  private final AssessmentService assessmentService;
  private final AssessmentRepository assessmentRepository;
  private final ExternalUsageRepository externalUsageRepository;
  private final AuthService authService;

  public Evaluate evaluate(Long userId) {
    return evaluate(userId, assessmentRepository.findAll());
  }

  // bull of shit
  public Evaluate evaluate(Long userId, List<Assessment> list) {
    User user = userService.findById(userId);
    return Evaluate.builder()
        .user(user)
        .assessment(assessmentService.filterByUser(list, user))
        .externalUsage(externalUsageRepository.findAllByApplyUser(user))
        .build();
  }

  public List<Evaluate> evaluate() {
    @SuppressWarnings("ConstantConditions")
    var id = authService.getCurrentUser().getId().intValue();
    var list = assessmentRepository.findAll();
    if (id <= 29 || id == 999) {
      return userService.findAll().stream().map(User::getId).map(i -> evaluate(i, list)).collect(Collectors.toList());
    } else {
      return List.of();
    }
  }
}
