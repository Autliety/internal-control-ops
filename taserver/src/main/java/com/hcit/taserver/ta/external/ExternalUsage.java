package com.hcit.taserver.ta.external;

import com.hcit.taserver.department.user.User;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;


@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor

@Entity
@Table(name = "ta_assessment_external_usage")
public class ExternalUsage {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  private External external;

  @ManyToOne
  private User requestUser;

  @ManyToOne
  private User applyUser;

  private Integer year;

  private String content;

  @CreationTimestamp
  private LocalDate createDate;
}
