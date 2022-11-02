package com.hcit.taserver.fr.matter;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.Department;
import com.hcit.taserver.department.user.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;

@ApiModel("问题清单")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_matter_form")
public class MatterForm {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Integer year;

  private String code;

  @ApiModelProperty("负责人")
  @ManyToOne
  private User user;

  public Department getDepartment() {
    return Optional.ofNullable(user).map(User::getDepartment).orElse(null);
  }

  @ApiModelProperty("问题审批状态")
  @Enumerated(EnumType.STRING)
  private Status status;

  @OneToMany(mappedBy = "matterForm", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Matter> matters;

  @JsonIgnoreProperties(value = {"matterForm"})
  @ManyToOne
  private Approval approval;

  @ApiModelProperty("更新时间")
  @UpdateTimestamp
  private LocalDateTime updateTime;

}
