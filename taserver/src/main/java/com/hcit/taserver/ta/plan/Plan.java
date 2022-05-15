package com.hcit.taserver.ta.plan;

import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.Department;
import com.hcit.taserver.ta.assessment.Assessment;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

/*
 * 措施
 * 只用于关联外键，进行查询
 * 比如查询某措施是否存在计划
 */
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "ta_plan")
public class Plan {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String code;

  @Enumerated(EnumType.STRING)
  private Status status;

  private Integer asmtId;
  @ApiModelProperty(hidden = true)
  @Transient private Assessment assessment;

  private Integer deptId;
  @ApiModelProperty(hidden = true)
  @Transient private Department department;

  @CreationTimestamp
  private LocalDateTime createTime;
  @UpdateTimestamp
  private LocalDateTime updateTime;

  @ApiModelProperty(hidden = true)
  @Transient
  private List<PlanDetail> details;

}
