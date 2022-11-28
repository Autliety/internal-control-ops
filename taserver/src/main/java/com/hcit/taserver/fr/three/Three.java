package com.hcit.taserver.fr.three;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalEntity;
import com.hcit.taserver.attach.Attach;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@ApiModel("三重一大")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_three")
public class Three implements BasicPersistable, ApprovalEntity {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Integer integer1;

  public Status getStatus() {
    return Status.getExtStep(integer1);
  }

  // request
  @ApiModelProperty("提交人")
  @ManyToOne
  private User requestUser;

  @ApiModelProperty("提交时间")
  private LocalDateTime requestTime;

  @ApiModelProperty("拟提交事项")
  private String requestTitle;

  @ApiModelProperty("拟提交事项内容")
  @Column(columnDefinition = "LONGTEXT")
  private String requestContent;

  @ApiModelProperty("议题来源")
  private String requestSource;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_three_request_id")
  private List<Attach> requestAttach;

  @JsonIgnoreProperties(value = {"three"}, allowSetters = true)
  @OneToOne(mappedBy = "three")
  private Approval approval;

  // decision
  @ApiModelProperty("决策时间")
  private LocalDateTime decisionTime;

  @ApiModelProperty("决策方式")
  private String decisionTitle;

  @ApiModelProperty("决策过程描述")
  @Column(columnDefinition = "LONGTEXT")
  private String decisionContent;

  @ApiModelProperty("决策结果")
  @Column(columnDefinition = "LONGTEXT")
  private String decisionResult;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_three_decision_id")
  private List<Attach> decisionAttach;

  @ApiModelProperty("纪委监督决策")
  @Column(columnDefinition = "LONGTEXT")
  private String decisionControl;

  //execute
  @ApiModelProperty("执行时间")
  private LocalDateTime executeTime;

  @ApiModelProperty("决策执行概述")
  @Column(columnDefinition = "LONGTEXT")
  private String executeContent;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_three_execute_id")
  private List<Attach> executeAttach;

  @ApiModelProperty("纪委监督执行")
  @Column(columnDefinition = "LONGTEXT")
  private String executeControl;

  private LocalDateTime updateTime;
}
