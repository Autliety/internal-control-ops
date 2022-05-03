package com.hcit.taserver.ta.task;

import com.hcit.taserver.ta.plan.Plan;
import java.time.LocalDateTime;
import java.util.List;
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
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
public class Task {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private Integer planId;
  @Transient
  private Plan plan;

  @CreationTimestamp
  private LocalDateTime createTime;
  @UpdateTimestamp
  private LocalDateTime updateTime;

  @Transient
  private List<TaskDetail> details;
}
