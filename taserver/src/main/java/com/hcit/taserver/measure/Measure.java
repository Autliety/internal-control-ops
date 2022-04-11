package com.hcit.taserver.measure;

import com.hcit.taserver.common.ValueType;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
@Table(name = "plan_measure")
public class Measure {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private Integer planId;

  private String name;

  @Enumerated(EnumType.STRING)
  private ValueType valueType;

  private String value;

  private LocalDateTime startTime;

  private LocalDateTime endTime;

  private String remark;
}

