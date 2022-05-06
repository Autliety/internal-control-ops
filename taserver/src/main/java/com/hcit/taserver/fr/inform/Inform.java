package com.hcit.taserver.fr.inform;

import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.department.Department;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.department.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@ApiModel("告知")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_inform")
public class Inform implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String code;

  private LocalDateTime createTime;

  @Enumerated(EnumType.STRING)
  private InformType type;

  private Long fromDeptId;
  @ApiModelProperty(hidden = true)
  @Transient private Department fromDepartment;
  private Long fromUserId;
  @ApiModelProperty(hidden = true)
  @Transient private User fromUser;

  private Long destDeptId;
  @ApiModelProperty(hidden = true)
  @Transient private Department destDepartment;
  private Long destUserId;
  @ApiModelProperty(hidden = true)
  @Transient private User destUser;

  @Transient
  private List<Matter> matter;
}
