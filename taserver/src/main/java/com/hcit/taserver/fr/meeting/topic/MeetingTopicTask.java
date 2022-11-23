package com.hcit.taserver.fr.meeting.topic;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.department.user.User;
import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@ApiModel("会议议题职责任务")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_meeting_topic_task")
public class MeetingTopicTask implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @JsonIgnoreProperties(value = {"task"}, allowSetters = true)
  @ManyToOne
  private MeetingTopic topic;

  public User getUser() {
    return topic == null ? null : topic.getUser();
  }

  @Column(columnDefinition = "LONGTEXT")
  private String content;

  private Boolean isMatter;
}
