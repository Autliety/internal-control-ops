package com.hcit.taserver.department;

import io.swagger.annotations.ApiModelProperty;
import java.util.Collection;
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
public class Department {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String name;

  private Integer parentId;

  @ApiModelProperty(hidden = true)
  @Transient
  private Department parent;

  @ApiModelProperty(hidden = true)
  @Transient
  private Collection<Department> children;
}
