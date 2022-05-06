package com.hcit.taserver.ta.task;

import com.hcit.taserver.ta.plan.PlanDetail;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
public class TaskDetail {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private Integer taskId;

  private Integer planDetailId;

  @ApiModelProperty(hidden = true)
  @Transient
  private PlanDetail planDetail;

  private String value;

  private String remark;

  private LocalDateTime startTime;

  private LocalDateTime endTime;
}

