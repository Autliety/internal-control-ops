package com.hcit.taserver.department.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.department.Department;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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

  @JsonProperty(access = Access.WRITE_ONLY)
  private String password;

  @JsonProperty("name")
  private String getFrName() {
    if (privilege == null || privilege == Privilege.NORMAL) {
      return name;
    } else {
      return name + "(" + privilege.getRole() + ")";
    }
  }

  @JsonProperty("taName")
  private String getTaName() {
    return name;
  }

  @Enumerated(EnumType.STRING)
  private Privilege privilege;

  private String gender;

  private Integer phone;

  private String station;

  @ManyToOne
  private Department department;

  private Integer userOrder;

  @JsonIgnore
  @ManyToOne
  private User parent;

  private Boolean isDeleted;
}
