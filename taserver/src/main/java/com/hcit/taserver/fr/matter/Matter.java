package com.hcit.taserver.fr.matter;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.fr.matter.form.MatterForm;
import com.hcit.taserver.fr.measure.Measure;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.UpdateTimestamp;

@ApiModel("问题")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_matter")
public class Matter implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String code;

  @JsonIgnoreProperties(value = {"matters"}, allowSetters = true)
  @ManyToOne
  private MatterForm matterForm;

  public Status getStatus() {
    return matterForm.getApprovalStatus();
  }

  public String getCode() {
    return String.format("WT2022-%06d", id);
  }

  @ApiModelProperty("问题内容")
  @Column(columnDefinition = "LONGTEXT")
  private String content;

  @ApiModelProperty("类型和来源")
  private String origin;

  @ApiModelProperty("措施")
  @JsonIgnoreProperties(value = {"matter"}, allowSetters = true)
  @OneToMany(mappedBy = "matter", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
  @Fetch(FetchMode.SUBSELECT)
  private List<Measure> measure;

  @ApiModelProperty("截止日期")
  private LocalDate endDate;

  @UpdateTimestamp
  private LocalDateTime updateTime;

}
