package com.hcit.taserver.user;

import com.hcit.taserver.department.Department;
import com.hcit.taserver.station.Station;
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

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
public class User {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String name;

  private String phone;

  private String tel;

  private Integer deptId;
  @Transient private Department department;

  @Transient
  private List<Station> stations;

}
