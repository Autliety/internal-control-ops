package com.hcit.taserver.ta.evaluate;

import com.hcit.taserver.department.user.User;
import com.hcit.taserver.ta.assessment.Assessment;
import com.hcit.taserver.ta.external.External;
import com.hcit.taserver.ta.external.ExternalUsage;
import com.hcit.taserver.ta.plan.Detail;
import com.hcit.taserver.ta.task.Task;
import io.swagger.annotations.ApiModel;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.util.CollectionUtils;

@ApiModel("评分")

@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor
public class Evaluate {

  public static final BigDecimal BD_100 = new BigDecimal(100);

  private Integer year;

  private User user;

  private List<Assessment> assessment;

  public BigDecimal getAssessmentPoint() {
    return assessment.stream().map(Assessment::getPoint).filter(Objects::nonNull)
        .reduce(BigDecimal.ZERO, BigDecimal::add);
  }

  public BigDecimal getPercent() {
    return assessment.stream()
        .map(a -> {
          var progress = a.getPlan().stream()
              .map(plan -> {
                if (CollectionUtils.isEmpty(plan.getDetail())) {
                  return BigDecimal.ZERO;
                }
                int sum = plan.getDetail().stream().map(Detail::getTask).map(Task::getProgress)
                    .reduce(0, Integer::sum);
                return new BigDecimal(sum).divide(new BigDecimal(plan.getDetail().size()), RoundingMode.HALF_UP);
              })
              .max(BigDecimal::compareTo)
              .orElse(BigDecimal.ZERO);
          var result = a.getPoint().multiply(progress);
          return result.equals(BigDecimal.ZERO) ? BigDecimal.ZERO : result.divide(BD_100, RoundingMode.HALF_UP);
        })
        .reduce(BigDecimal.ZERO, BigDecimal::add);
  }

  private List<ExternalUsage> externalUsage;

  public BigDecimal getExternalPoint() {
    return externalUsage.stream().map(ExternalUsage::getExternal).map(External::getPoint).filter(Objects::nonNull)
        .reduce(BigDecimal.ZERO, BigDecimal::add);
  }

  public BigDecimal getTotal() {
    return (getPercent().equals(BigDecimal.ZERO) ? BigDecimal.ZERO
        : getPercent().divide(getAssessmentPoint(), RoundingMode.HALF_UP)).multiply(BD_100).add(getExternalPoint());
  }

}
