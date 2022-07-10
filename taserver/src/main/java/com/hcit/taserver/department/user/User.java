package com.hcit.taserver.department.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.department.Department;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
public class User implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  @JsonProperty("name")
  private String getFrName() {
    if (role == null) {
      return name;
    } else {
      return name + "(" + role + ")";
    }
  }

  private String role;

  private String station;

  @ManyToOne
  private Department department;

  private Integer userOrder;

}
