package com.hcit.taserver.fr.meeting;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalEntity;
import com.hcit.taserver.attach.Attach;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.meeting.topic.MeetingTopic;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
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

@ApiModel("问题")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_meeting")
public class Meeting implements BasicPersistable, ApprovalEntity {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String code;

  @Enumerated(EnumType.STRING)
  private Status status;

  @ApiModelProperty("会议类型")
  private String type;

  @ApiModelProperty("会议时间")
  private LocalDateTime startTime;

  @ApiModelProperty("会议地点")
  private String placement;

  @ApiModelProperty("责任主体")
  @ManyToOne
  private User user;

  @ApiModelProperty("参会人员")
  @ManyToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  private List<User> meetingUser;

  @ApiModelProperty("列席人员")
  @ManyToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  private List<User> subUser;

  public int getMeetingUserCount() {
    return Optional.ofNullable(meetingUser).map(List::size).orElse(0);
  }

  @ApiModelProperty("会议议题")
  private String content;

  @ApiModelProperty("会议职责任务")
  @JsonIgnoreProperties(value = {"meeting"}, allowSetters = true)
  @OneToMany(mappedBy = "meeting", fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  private List<MeetingTopic> topic;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_meeting_id")
  private List<Attach> attach;

  @JsonIgnoreProperties(value = {"meeting"}, allowSetters = true)
  @OneToOne(mappedBy = "meeting")
  private Approval approval;
}
