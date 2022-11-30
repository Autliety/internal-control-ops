package com.hcit.taserver.fr.matter.form;

import static javax.persistence.FetchType.EAGER;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalEntity;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.Department;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.matter.Matter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.UpdateTimestamp;

@ApiModel("问题清单")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_matter_form")
public class MatterForm implements BasicPersistable, ApprovalEntity {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Integer year;

  @ApiModelProperty("负责人")
  @ManyToOne
  private User user;

  public Department getDepartment() {
    return Optional.ofNullable(user).map(User::getDepartment).orElse(null);
  }

  @Enumerated(EnumType.STRING)
  private Status status;

  @JsonIgnoreProperties(value = {"matterForm"}, allowSetters = true)
  @OneToMany(mappedBy = "matterForm", cascade = CascadeType.ALL, fetch = EAGER)
  @Fetch(FetchMode.SUBSELECT)
  private List<Matter> matters;

  @JsonIgnoreProperties(value = {"matterForm", "progressMatterForm"}, allowSetters = true)
  @OneToOne(mappedBy = "matterForm")
  private Approval approval;

  @JsonIgnoreProperties(value = {"matterForm", "progressMatterForm"}, allowSetters = true)
  @OneToOne(mappedBy = "progressMatterForm")
  private Approval progressApproval;

  @ApiModelProperty("更新时间")
  @UpdateTimestamp
  private LocalDateTime updateTime;

  @Transient
  private List<MatterForm> children;
}
