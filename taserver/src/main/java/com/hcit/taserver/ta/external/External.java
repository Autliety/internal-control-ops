package com.hcit.taserver.ta.external;

import io.swagger.annotations.ApiModel;
import java.math.BigDecimal;
import java.time.LocalDate;
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
import org.hibernate.annotations.CreationTimestamp;

@ApiModel("附加指标")

@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor

@Entity
@Table(name = "ta_assessment_external")
public class External {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String code;

  private BigDecimal point;

  private String levelOne;

  private String levelTwo;

  private String name;

  private String standard;

  @CreationTimestamp
  private LocalDate createDate;

}
