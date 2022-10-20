package com.hcit.taserver.approval;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.matter.MatterForm;
import com.hcit.taserver.fr.meeting.Meeting;
import com.hcit.taserver.fr.meeting.topic.MeetingTopic;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.With;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.util.CollectionUtils;

@ApiModel("审批单")

@Getter @Setter @With
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

  @JsonIgnoreProperties(value = {"approval"}, allowSetters = true)
  @OneToMany(mappedBy = "approval", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
  @Fetch(FetchMode.SUBSELECT)
  private List<ApprovalStep> step;

  @Transient
  public Status getStatus() {
    return Optional.ofNullable(CollectionUtils.lastElement(step))
        .map(ApprovalStep::getStatus)
        .orElse(Status.NONE_REVIEW);
  }

  public String approvalType;

  // fr
  @JsonIgnoreProperties(value = {"approval"}, allowSetters = true)
  @OneToOne
  private Meeting meeting;

  @JsonIgnoreProperties(value = {"approval"}, allowSetters = true)
  @OneToOne
  private MeetingTopic meetingTopic;

  @JsonIgnoreProperties(value = {"approval"}, allowSetters = true)
  @OneToOne
  private MatterForm matterForm;

  @JsonIgnoreProperties(value = {"approval"}, allowSetters = true)
  @OneToOne
  private Progress progress;

  // ta
  @JsonIgnoreProperties(value = {"approval"}, allowSetters = true)
  @OneToOne
  private Plan plan;
}
