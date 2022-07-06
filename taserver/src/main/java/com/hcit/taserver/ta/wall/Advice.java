package com.hcit.taserver.ta.wall;

import com.hcit.taserver.department.user.User;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
@Table(name = "ta_advice")
public class Advice {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  //标题
  public String title;

  //意见类型：投诉/建议
  public String type;

  //投诉人
  @OneToOne
  public User name;

  //创建时间
  @CreationTimestamp
  public LocalDate complaintTime;

  //意见内容
  public String content;

}
