package com.hcit.taserver.measure;

import com.hcit.taserver.assessment.Assessment;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

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

  private Integer asmtId;

  private Integer deptId;

  private String name;

  @CreationTimestamp
  private LocalDateTime createTime;

  @UpdateTimestamp
  private LocalDateTime updateTime;

  @Transient
  private List<Measure> measures;

  @Transient
  private Assessment assessment;
}
