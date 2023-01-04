package com.hcit.taserver.fr.evaluation;

import com.hcit.taserver.common.BasicPersistable;
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


@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_evaluation")
public class Evaluation implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Integer year;

  private String type;

  private String name;

  /*分值*/
  private BigDecimal value;

  @Column(columnDefinition = "LONGTEXT")
  private String content;

  @Column(columnDefinition = "LONGTEXT")
  private String focus;

  /*
  * 1，班子成员
  * 2，站所
  * 3，村社
  * */
  private Integer page;

}
