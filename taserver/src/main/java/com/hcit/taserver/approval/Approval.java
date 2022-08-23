package com.hcit.taserver.approval;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.meeting.Meeting;
import com.hcit.taserver.fr.meeting.Topic;
import com.hcit.taserver.fr.progress.Progress;
import com.hcit.taserver.ta.plan.Plan;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@ApiModel("审批单")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
public class Approval implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ApiModelProperty("申请人")
  @ManyToOne
  private User requestUser;

  @ApiModelProperty("审核人")
  @ManyToOne
  private User approveUser;

  @ApiModelProperty("抄送人")
  @ManyToOne
  private User copyUser;

  @CreationTimestamp
  private LocalDateTime createTime;

  @CreationTimestamp
  private LocalDateTime updateTime;

  @JsonIgnoreProperties({"approval"})
  @OneToMany(mappedBy = "approval", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
  @Fetch(FetchMode.SUBSELECT)
  private List<ApprovalStep> step;

  @Transient
  public Status getStatus() {
    return Optional.ofNullable(step).map(l -> l.get(step.size() - 1)).map(ApprovalStep::getStatus).orElse(null);
  }

  // fr
  @JsonIgnoreProperties({"approval"})
  @OneToOne(cascade = CascadeType.PERSIST)
  private Meeting meeting;

  @JsonIgnoreProperties({"approval"})
  @OneToOne(cascade = CascadeType.PERSIST)
  private Topic meetingTopic;

  @JsonIgnoreProperties({"approval"})
  @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @Fetch(FetchMode.SUBSELECT)
  private List<Matter> matter;

  @JsonIgnoreProperties({"approval"})
  @OneToOne(cascade = CascadeType.PERSIST)
  private Progress progress;

  // ta
  @JsonIgnoreProperties({"approval"})
  @OneToOne(cascade = CascadeType.PERSIST)
  private Plan plan;
}


