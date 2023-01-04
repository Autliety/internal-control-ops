package com.hcit.taserver.department;

import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.department.user.User;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
public class Department implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  private String shortName;

  public String getShortName() {
    return shortName == null ? name : shortName;
  }

  public Integer deptOrder;

  private Long parentId;

  @Enumerated(EnumType.STRING)
  private DeptType deptType;

  @Transient
  private User firstUser;

  @Transient
  private User deptUser;
}
