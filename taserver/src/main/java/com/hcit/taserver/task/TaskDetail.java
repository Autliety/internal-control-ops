package com.hcit.taserver.task;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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

  private String value;

  private String remark;

  private LocalDateTime startTime;

  private LocalDateTime endTime;
}

