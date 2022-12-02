package com.hcit.taserver.fr.motion;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalEntity;
import com.hcit.taserver.attach.Attach;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.data.FrResultData;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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
import org.springframework.util.CollectionUtils;


@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_motion")
public class Motion implements BasicPersistable, ApprovalEntity {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Integer integer1;

  public Status getStatus() {
    return Status.getExtStep(integer1);
  }

  // request
  @ManyToOne
  private User requestUser;

  private LocalDate requestDate;

  private String requestTitle;

  @Column(columnDefinition = "LONGTEXT")
  private String requestContent;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_motion_request_id")
  private List<Attach> requestAttach;

  @JsonIgnoreProperties(value = {"motion"}, allowSetters = true)
  @OneToOne(mappedBy = "motion")
  private Approval approval;

  // decision
  @ManyToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  private List<User> decisionUser;

  private LocalDate decisionDate;

  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
  @JoinColumn(name = "motion_id")
  @Fetch(FetchMode.SUBSELECT)
  private List<FrResultData> decisionExecuteResult;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_motion_decision_id")
  private List<Attach> decisionAttach;

  // execute
  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_motion_execute_id")
  private List<Attach> executeAttach;

  @ManyToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  private List<User> executeUser;

  public User getMainExecuteUser() {
    return CollectionUtils.firstElement(executeUser);
  }

  private LocalDate executeDate;

  private LocalDateTime updateTime;

}
