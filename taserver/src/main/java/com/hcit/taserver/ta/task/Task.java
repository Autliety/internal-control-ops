package com.hcit.taserver.ta.task;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.common.ValueType;
import com.hcit.taserver.ta.plan.Detail;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "ta_task")
public class Task {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @JsonIgnoreProperties({"task"})
  @OneToOne(mappedBy = "task")
  private Detail planDetail;

  @Enumerated(EnumType.STRING)
  private ValueType valueType;

  private String value;

  private String remark;

  @Enumerated(EnumType.STRING)
  private Status status;

  @UpdateTimestamp
  private LocalDateTime updateTime;

}
