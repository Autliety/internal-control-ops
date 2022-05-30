package com.hcit.taserver.fr.progress;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.fr.measure.Measure;
import io.swagger.annotations.ApiModel;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;

@ApiModel("履责情况 动态跟踪")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_progress")
public class Progress implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @JsonIgnoreProperties(value = {"progress"}, allowSetters = true)
  @OneToOne(mappedBy = "progress")
  private Measure measure;

  private String content;

  private Integer percentage;

  private String reason;

  @Enumerated(EnumType.STRING)
  private Status status;

  @UpdateTimestamp
  private LocalDateTime updateTime;

  @JsonIgnoreProperties(value = {"progress"}, allowSetters = true)
  @OneToOne(mappedBy = "progress")
  private Approval approval;
}
