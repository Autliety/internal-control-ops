package com.hcit.taserver.approval;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;


@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
public class ApprovalStep implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @JsonIgnoreProperties(value = "step", allowSetters = true)
  @ManyToOne
  private Approval approval;

  @ManyToOne
  private User approveUser;

  @Enumerated(EnumType.STRING)
  private Status status;

  private String content;

  @UpdateTimestamp
  private LocalDateTime updateTime;
}
