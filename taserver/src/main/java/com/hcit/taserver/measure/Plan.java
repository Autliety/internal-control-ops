package com.hcit.taserver.measure;

import com.hcit.taserver.assessment.Assessment;
import com.hcit.taserver.department.Department;
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

/*
 * 措施
 * 只用于关联外键，进行查询
 * 比如查询某措施是否存在计划
 * */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
public class Plan {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String code;

  private Integer asmtId;
  @Transient private Assessment assessment;

  private Integer deptId;
  @Transient private Department department;

  @CreationTimestamp
  private LocalDateTime createTime;
  @UpdateTimestamp
  private LocalDateTime updateTime;

  @Transient
  private List<PlanDetail> details;
}
