package com.hcit.taserver.measure;

import com.hcit.taserver.common.ValueType;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
/*
*计划措施
*具体实现步骤
* 比如某措施的实现方法
* */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
public class Measure {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private Integer planId;

  private String name;

  @Enumerated(EnumType.STRING)
  private ValueType type;

  private String value;

  private LocalDateTime startTime;

  private LocalDateTime endTime;

  private String remark;
}

