package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.Department;
import com.hcit.taserver.department.user.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
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

@ApiModel("问题")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_meeting")
public class Meeting implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ApiModelProperty("编号")
  @Column(unique = true)
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
  private Long deptId;
  @ApiModelProperty(hidden = true)
  @Transient
  private Department department;

  @ElementCollection(fetch = FetchType.EAGER)
  @CollectionTable(name = "fr_meeting_user")
  @ApiModelProperty("参会人员")
  private List<Long> userId;
  @ApiModelProperty(hidden = true)
  @Transient
  private List<User> user;

  public int getUserCount() {
    return userId.size();
  }

  @ApiModelProperty(hidden = true)
  @Transient
  private List<Topic> topic;
}
