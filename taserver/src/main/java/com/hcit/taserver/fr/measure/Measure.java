package com.hcit.taserver.fr.measure;

import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.user.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.LocalDate;
import java.util.Optional;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
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

  @ApiModelProperty("问题id")
  private Long matterId;
  @ApiModelProperty(hidden = true)
  @Transient
  private Matter matter;

  private String code;

  public String getCode() {
    return Optional.ofNullable(matter).map(Matter::getCode).orElse("") + "-" + code;
  }

  @ApiModelProperty("工作措施")
  private String content;

  @ApiModelProperty("责任人id")
  private Long userId;
  @ApiModelProperty(hidden = true)
  @Transient
  private User user;

  private LocalDate startDate;
  private LocalDate endDate;

}
