package com.hcit.taserver.fr.matter;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.approval.Approval;
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
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
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
  private String code;

  @ApiModelProperty("问题内容")
  private String content;

  @ApiModelProperty("类型和来源")
  private String origin;

  @ApiModelProperty("负责人")
  @ManyToOne
  private User user;

  public Department getDepartment() {
    return Optional.ofNullable(user).map(User::getDepartment).orElse(null);
  }

  @ApiModelProperty("措施")
  @JsonIgnoreProperties(value = {"matter"}, allowSetters = true)
  @OneToMany(mappedBy = "matter", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @Fetch(FetchMode.SUBSELECT)
  private List<Measure> measure;

  @ApiModelProperty("截止日期")
  private LocalDate endDate;

  @ApiModelProperty("更新时间")
  @UpdateTimestamp
  private LocalDateTime updateTime;

  @ApiModelProperty("问题的措施清单审批状态")
  @Enumerated(EnumType.STRING)
  private Status measureStatus;

  @JsonIgnoreProperties(value = {"matter"}, allowSetters = true)
  @OneToOne(mappedBy = "matter")
  private Approval approval;
}
