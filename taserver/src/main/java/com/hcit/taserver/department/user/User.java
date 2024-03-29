package com.hcit.taserver.department.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.department.Department;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
public class User implements BasicPersistable {

  public static User of(Long id) {
    return User.builder().id(id).build();
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
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

  private String phone;

  private String station;

  @ManyToOne
  private Department department;

  private Integer userOrder;

  @JsonIgnoreProperties(value = {"department", "parent"}, allowSetters = true)
  @ManyToOne
  private User parent;

  private Boolean isDeleted;
}
