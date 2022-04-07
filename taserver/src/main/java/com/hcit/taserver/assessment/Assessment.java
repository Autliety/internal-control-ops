package com.hcit.taserver.assessment;

import com.hcit.taserver.department.Department;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class Assessment {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String name;

  private BigDecimal point;

  @Enumerated(EnumType.STRING)
  private PointType valueType;

  private BigDecimal value;

  private String standard;

  private String upperDepartment;

  private Integer deptId;

  @Transient
  private Department department;

  private Integer parentId;

  @Transient
  private Assessment parent;

  @Transient
  private List<Assessment> children;

  @CreationTimestamp
  private LocalDateTime createTime;

  @UpdateTimestamp
  private LocalDateTime updateTime;
}
