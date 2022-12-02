package com.hcit.taserver.fr.three;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalEntity;
import com.hcit.taserver.attach.Attach;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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


@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_three")
public class Three implements BasicPersistable, ApprovalEntity {

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

  private String requestSource;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_three_request_id")
  private List<Attach> requestAttach;

  @JsonIgnoreProperties(value = {"three"}, allowSetters = true)
  @OneToOne(mappedBy = "three")
  private Approval approval;

  // decision
  private LocalDate decisionDate;

  private String decisionTitle;

  @Column(columnDefinition = "LONGTEXT")
  private String decisionContent;

  @Column(columnDefinition = "LONGTEXT")
  private String decisionResult;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_three_decision_id")
  private List<Attach> decisionAttach;

  @Column(columnDefinition = "LONGTEXT")
  private String decisionControl;

  //execute
  private LocalDate executeDate;

  @Column(columnDefinition = "LONGTEXT")
  private String executeContent;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_three_execute_id")
  private List<Attach> executeAttach;

  @Column(columnDefinition = "LONGTEXT")
  private String executeControl;

  private LocalDateTime updateTime;
}
