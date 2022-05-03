package com.hcit.taserver.fr.matter;

import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.department.Department;
import com.hcit.taserver.fr.measure.Measure;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.List;
import javax.persistence.Column;
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

@ApiModel("问题")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
public class Matter implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ApiModelProperty("问题编号")
  @Column(unique = true)
  private String code;

  @ApiModelProperty("问题概述")
  private String name;

  @ApiModelProperty("问题内容")
  private String content;

  @ApiModelProperty("问题类型")
  private String type;

  @ApiModelProperty("问题来源")
  private String origin;

  private Long deptId;
  @Transient
  @ApiModelProperty("责任主体")
  private Department department;

  @Transient
  private List<Measure> measures;

}
