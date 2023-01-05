package com.hcit.taserver.fr.evaluation.userEva.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hcit.taserver.department.user.User;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.commons.collections4.CollectionUtils;

@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class UserEvaListDto {

  Integer year;

  User user;

  @JsonIgnore
  List<UserEvaluation> userEvaluations;

  public BigDecimal getTotal() {
    return userEvaluations.stream()
        .map(UserEvaluation::getTotal)
        .filter(Objects::nonNull)
        .reduce(BigDecimal.ZERO, BigDecimal::add);
  }

  public Integer getAmount() {
    return CollectionUtils.size(userEvaluations);
  }

}
