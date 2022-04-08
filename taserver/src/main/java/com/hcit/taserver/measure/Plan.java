package com.hcit.taserver.measure;

import lombok.*;

import javax.persistence.*;
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

  @Transient
  private List<Measure> measures;
}
