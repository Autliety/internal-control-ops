package com.hcit.taserver.fr.evaluation.userEva.entity;

import com.hcit.taserver.department.user.User;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class UserEvaListDto {

  Integer year;

  User user;

  List<UserEvaluation> userEvaluations;

  public BigDecimal getTotal() {
    return userEvaluations.stream()
        .map(UserEvaluation::getTotal)
        .filter(Objects::nonNull)
        .reduce(BigDecimal.ZERO, BigDecimal::add);
  }
}
