package com.hcit.taserver.ta.plan;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.Department;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.ta.assessment.Assessment;
import java.time.LocalDateTime;
import java.util.List;
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
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.util.CollectionUtils;

/*
 * 措施
 * 只用于关联外键，进行查询
 * 比如查询某措施是否存在计划
 */
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "ta_plan")
public class Plan {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String code;

  @Enumerated(EnumType.STRING)
  private Status status;

  @JsonIgnoreProperties(value = {"plan"}, allowSetters = true)
  @ManyToOne
  private Assessment assessment;

  @ManyToOne
  private Department department;

  @ManyToOne
  private User user;

  @UpdateTimestamp
  private LocalDateTime updateTime;

  @JsonIgnoreProperties(value = {"plan"}, allowSetters = true)
  @OneToMany(mappedBy = "plan", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  private List<Detail> detail;

  public Integer getDetailCount() {
    return CollectionUtils.isEmpty(detail) ? null : detail.size();
  }

  @JsonIgnoreProperties(value = {"plan"}, allowSetters = true)
  @OneToOne(mappedBy = "plan")
  private Approval approval;
}
