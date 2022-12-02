package com.hcit.taserver.approval;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.matter.form.MatterForm;
import com.hcit.taserver.fr.meeting.Meeting;
import com.hcit.taserver.fr.meeting.topic.MeetingTopic;
import com.hcit.taserver.fr.motion.Motion;
import com.hcit.taserver.fr.three.Three;
import com.hcit.taserver.ta.plan.Plan;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
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


@Getter @Setter @With
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
public class Approval implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  private User requestUser;

  @ManyToOne
  private User approveUser;

  @ManyToOne
  private User copyUser;

  @CreationTimestamp
  private LocalDateTime createTime;

  @CreationTimestamp
  private LocalDateTime updateTime;

  @JsonIgnoreProperties(value = {"approval"}, allowSetters = true)
  @OneToMany(mappedBy = "approval", fetch = FetchType.EAGER)
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

  @JsonIgnoreProperties(value = {"approval, progressApproval"}, allowSetters = true)
  @OneToOne
  private MatterForm matterForm;

  @JsonIgnoreProperties(value = {"approval, progressApproval"}, allowSetters = true)
  @OneToOne
  private MatterForm progressMatterForm;

  @JsonIgnoreProperties(value = {"approval"}, allowSetters = true)
  @OneToOne
  private Motion motion;

  @JsonIgnoreProperties(value = {"approval"}, allowSetters = true)
  @OneToOne
  private Three three;

  // ta
  @JsonIgnoreProperties(value = {"approval"}, allowSetters = true)
  @OneToOne
  private Plan plan;
}
