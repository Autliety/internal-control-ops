package com.hcit.taserver.ta.plan;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.common.ValueType;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.ta.task.Task;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "ta_plan_detail")
public class Detail {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @JsonIgnoreProperties({"detail"})
  @ManyToOne
  private Plan plan;

  @ManyToOne
  private User user;

  private String name;

  @Enumerated(EnumType.STRING)
  private ValueType valueType;

  private String value;

  private String remark;

  private LocalDate startDate;

  private LocalDate endDate;

  @JsonIgnoreProperties({"planDetail"})
  @OneToOne(mappedBy = "planDetail")
  private Task task;

}

