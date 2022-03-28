package com.hcit.taserver.user;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
public class User {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(unique = true)
  private String uuid;

  private String name;

  private String password;

  private String gender;

  private Integer deptId;

  @Transient
  private Department department;

  @CreationTimestamp
  private LocalDateTime createTime;

  @UpdateTimestamp
  private LocalDateTime updateTime;
}
