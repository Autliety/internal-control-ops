package com.hcit.taserver.department;

import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.department.user.User;
import io.swagger.annotations.ApiModelProperty;
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

  @ApiModelProperty(hidden = true)
  @Transient
  private User user;
}
