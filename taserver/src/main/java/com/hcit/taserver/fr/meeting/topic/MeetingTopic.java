package com.hcit.taserver.fr.meeting.topic;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalEntity;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.meeting.Meeting;
import io.swagger.annotations.ApiModel;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@ApiModel("会议议题")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_meeting_topic")
public class MeetingTopic implements BasicPersistable, ApprovalEntity {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @JsonIgnoreProperties(value = "topic", allowSetters = true)
  @ManyToOne
  private Meeting meeting;

  @ManyToOne
  private User user;

  @Enumerated(EnumType.STRING)
  private Status status;

  @JsonIgnoreProperties(value = {"topic"}, allowSetters = true)
  @OneToMany(mappedBy = "topic", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
  @Fetch(FetchMode.SUBSELECT)
  private List<MeetingTopicTask> task;

  @Transient
  public int getCount() {
    return Optional.ofNullable(task).map(List::size).orElse(0);
  }

  @CreationTimestamp
  private LocalDateTime createTime;

  @JsonIgnoreProperties(value = {"meetingTopic"}, allowSetters = true)
  @OneToOne(mappedBy = "meetingTopic")
  private Approval approval;
}
