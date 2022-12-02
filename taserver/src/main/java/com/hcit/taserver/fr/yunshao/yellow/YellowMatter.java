package com.hcit.taserver.fr.yunshao.yellow;

import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.matter.Matter;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_yellow_matter")
public class YellowMatter {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  private Yellowwarning yellowwarning;

  @ManyToOne
  private User user;

  @OneToOne
  private Matter matter;

  @Transient
  private LocalDate endDate;
}
