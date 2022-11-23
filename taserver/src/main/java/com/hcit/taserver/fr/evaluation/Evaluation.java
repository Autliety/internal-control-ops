package com.hcit.taserver.fr.evaluation;

import com.hcit.taserver.common.BasicPersistable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

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

  /*分值*/
  private BigDecimal value;

  @ApiModelProperty("考评内容")
  @Column(columnDefinition = "LONGTEXT")
  private String content;

  @ApiModelProperty("数据要点")
  private String focus;

  /*
  * 1，班子成员
  * 2，站所
  * 3，村社
  * */
  private Integer page;

}
