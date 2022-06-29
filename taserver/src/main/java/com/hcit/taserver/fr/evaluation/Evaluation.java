package com.hcit.taserver.fr.evaluation;

import com.hcit.taserver.common.BasicPersistable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@ApiModel("考评")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_evaluation")
public class Evaluation implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ApiModelProperty("考评模块")
  private String type;

  @ApiModelProperty("考核指标")
  private String name;

  @ApiModelProperty("考评内容")
  @Column(columnDefinition = "LONGTEXT")
  private String content;

  @ApiModelProperty("数据要点")
  private String focus;

  private BigDecimal value;

  private Integer page;

}
