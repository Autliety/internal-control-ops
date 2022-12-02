package com.hcit.taserver.fr.matter;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hcit.taserver.attach.Attach;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.fr.matter.form.MatterForm;
import com.hcit.taserver.fr.matter.measure.Measure;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.UpdateTimestamp;


@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_matter")
public class Matter implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String code;

  public String getCode() {
    return String.format("WT2022-%04d", id);
  }

  @JsonIgnoreProperties(value = {"matters"}, allowSetters = true)
  @ManyToOne
  private MatterForm matterForm;

  public Status getStatus() {
    return matterForm.getApprovalStatus();
  }

  @Column(columnDefinition = "LONGTEXT")
  private String content;

  private String origin;

  @JsonIgnoreProperties(value = {"matter"}, allowSetters = true)
  @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "matter_id")
  @Fetch(FetchMode.SUBSELECT)
  private List<Measure> measure;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_progress_matter_id")
  private List<Attach> progressAttach;

  private LocalDate endDate;

  @UpdateTimestamp
  private LocalDateTime updateTime;

}
