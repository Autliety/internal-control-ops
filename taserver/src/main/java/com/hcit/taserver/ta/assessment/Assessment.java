package com.hcit.taserver.ta.assessment;

import com.hcit.taserver.common.ValueType;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor

@Entity
@Table(name = "ta_assessment")
public class Assessment {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String code;

  private String name;

  private BigDecimal point;

  @Enumerated(EnumType.STRING)
  private ValueType valueType;

  private String value;

  private String standard;

  private String upperDepartment;

  private Integer parentId;

  @ApiModelProperty(hidden = true)
  @Transient
  private Assessment parent;

  @ApiModelProperty(hidden = true)
  @Transient
  private List<Assessment> children;

  @CreationTimestamp
  private LocalDateTime createTime;

  @UpdateTimestamp
  private LocalDateTime updateTime;
}
