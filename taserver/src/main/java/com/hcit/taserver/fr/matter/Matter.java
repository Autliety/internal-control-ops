package com.hcit.taserver.fr.matter;

import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.Department;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.measure.Measure;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import javax.persistence.Column;
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
import org.hibernate.annotations.UpdateTimestamp;

@ApiModel("问题")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_matter")
public class Matter implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ApiModelProperty("问题编号")
  @Column(unique = true)
  private String code;

  @ApiModelProperty("问题内容")
  private String content;

  @ApiModelProperty("问题类型")
  private String type;

  @ApiModelProperty("问题来源")
  private String origin;

  @ApiModelProperty("负责人")
  private Long userId;
  @ApiModelProperty(hidden = true)
  @Transient
  private User user;

  public Department getDepartment() {
    return Optional.ofNullable(user).map(User::getDepartment).orElse(null);
  }

  @ApiModelProperty(hidden = true)
  @Transient
  private List<Measure> measures;

  @ApiModelProperty("截止日期")
  private LocalDate endDate;

  @ApiModelProperty("更新时间")
  @UpdateTimestamp
  private LocalDateTime updateTime;

  @ApiModelProperty("问题审批状态")
  @Enumerated(EnumType.STRING)
  private Status status;

  @ApiModelProperty("问题中的措施清单审批状态")
  @Enumerated(EnumType.STRING)
  private Status measureStatus;

  @Enumerated(EnumType.STRING)
  private MatterSource source;

  private Long sourceId;

}
