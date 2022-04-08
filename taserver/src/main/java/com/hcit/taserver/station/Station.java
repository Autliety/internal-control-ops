package com.hcit.taserver.station;

import com.hcit.taserver.department.Department;
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

  private  String dept;

  private String name;

  private Integer deptId;

  @Transient
  private Department department;
}
