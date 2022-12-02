package com.hcit.taserver.ta.assessment;

import com.alibaba.excel.annotation.ExcelProperty;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.common.ValueType;
import com.hcit.taserver.department.Department;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.ta.plan.Plan;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;


@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor

@Entity
@Table(name = "ta_assessment")
public class Assessment {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ExcelProperty("编号")
  private String code;

  @ExcelProperty("一级指标")
  private String levelOne;

  @ExcelProperty("二级指标")
  private String levelTwo;

  @ExcelProperty("三级指标")
  private String name;

  @ExcelProperty("分值")
  private BigDecimal point;

  @Enumerated(EnumType.STRING)
  private ValueType valueType;

  @ExcelProperty("指标要求")
  private String value;

  @ExcelProperty("考核标准")
  @Column(columnDefinition = "LONGTEXT")
  private String standard;

  @ManyToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  private List<User> respUser;

  @ExcelProperty("责任领导")
  @Transient
  private String respUserContent;

  @ManyToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  private List<Department> respDepartment;

  @ExcelProperty("责任站办")
  @Transient
  private String respDepartmentContent;

  @CreationTimestamp
  private LocalDate createDate;

  @JsonIgnoreProperties(value = {"plan"}, allowSetters = true)
  @OneToMany(mappedBy = "assessment", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  private List<Plan> plan;

}
