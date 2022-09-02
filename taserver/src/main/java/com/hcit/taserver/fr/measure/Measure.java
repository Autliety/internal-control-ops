package com.hcit.taserver.fr.measure;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.progress.Progress;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import java.util.Optional;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@ApiModel("措施")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_measure")
public class Measure implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ApiModelProperty("问题")
  @JsonIgnoreProperties(value = {"measure"}, allowSetters = true)
  @ManyToOne
  private Matter matter;

  private String code;

  public String getCode() {
    return Optional.ofNullable(matter).map(Matter::getCode).orElse("") + "-" + code;
  }

  public Status getStatus() {
    return Optional.ofNullable(matter).map(Matter::getStatus).orElse(null);
  }

  @ApiModelProperty("工作措施详情")
  @Column(columnDefinition = "LONGTEXT")
  private String content;

  @ApiModelProperty("责任人")
  @ManyToOne
  private User user;

  private LocalDate startDate;

  private LocalDate endDate;

  @JsonIgnoreProperties(value = {"measure"}, allowSetters = true)
  @OneToOne(cascade = CascadeType.ALL)
  private Progress progress;

}
