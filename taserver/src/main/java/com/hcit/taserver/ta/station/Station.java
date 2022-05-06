package com.hcit.taserver.ta.station;

import com.hcit.taserver.department.Department;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter @NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
public class Station {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String dept;

  private String name;

  private Integer deptId;

  @ApiModelProperty(hidden = true)
  @Transient
  private Department department;
}
