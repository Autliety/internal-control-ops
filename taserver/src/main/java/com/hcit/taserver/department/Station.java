package com.hcit.taserver.department;

import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.department.Department;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter @NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
public class Station implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String dept;

  private String name;

  private Long deptId;

  @ApiModelProperty(hidden = true)
  @Transient
  private Department department;
}
