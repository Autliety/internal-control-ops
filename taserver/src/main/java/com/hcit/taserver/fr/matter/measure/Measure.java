package com.hcit.taserver.fr.matter.measure;

import com.hcit.taserver.common.BasicPersistable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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

  private String code;

  public String getCode() {
    return id.toString();
  }

  @ApiModelProperty("工作措施详情")
  @Column(columnDefinition = "LONGTEXT")
  private String content;

  @Column(columnDefinition = "LONGTEXT")
  private String progress;

  @Enumerated(EnumType.STRING)
  private ProgressStatus progressStatus;

}
