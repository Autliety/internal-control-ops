package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.department.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
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
import org.springframework.util.CollectionUtils;

@ApiModel("会议议题")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "meeting_topic")
public class Topic implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Long meetingId;

  private Long userId;
  @ApiModelProperty(hidden = true)
  @Transient
  private User user;

  @Enumerated(EnumType.STRING)
  private TopicStatus status;

  @ElementCollection(fetch = FetchType.EAGER)
  @CollectionTable(name = "fr_meeting_topic_content")
  private List<String> content;

  @ApiModelProperty(hidden = true)
  @Transient
  private List<Matter> matter;

  @Transient
  public int getCount() {
    if (CollectionUtils.isEmpty(content)) {
      return 0;
    }
    return content.size();
  }

  @UpdateTimestamp
  private LocalDateTime updateTime;

}
