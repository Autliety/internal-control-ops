package com.hcit.taserver.approval;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.fr.meeting.Meeting;
import com.hcit.taserver.fr.meeting.Topic;
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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

@ApiModel("审批单")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
public class Approval implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ApiModelProperty("选择审核人")
  @Transient
  private Long approveUserId;

  @CreationTimestamp
  private LocalDateTime createTime;

  @CreationTimestamp
  private LocalDateTime updateTime;

  @JsonIgnoreProperties({"approval"})
  @OneToMany(mappedBy = "approval", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  private List<ApprovalStep> step;

  @Transient
  public Status getStatus() {
    return Optional.ofNullable(step).map(l -> l.get(0)).map(ApprovalStep::getStatus).orElse(null);
  }

  @JsonIgnoreProperties({"approval"})
  @OneToOne(cascade = CascadeType.PERSIST)
  private Meeting meeting;

  @JsonIgnoreProperties({"approval"})
  @OneToOne(cascade = CascadeType.PERSIST)
  private Topic meetingTopic;
}


