package com.hcit.taserver.fr.inform;

import com.hcit.taserver.attach.Attach;
import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.department.Department;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.matter.Matter;
import io.swagger.annotations.ApiModel;
import java.time.LocalDate;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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

@ApiModel("告知")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_inform")
public class Inform implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String code;

  @Column(columnDefinition = "LONGTEXT")
  private String content;

  private LocalDate createDate;

  @Enumerated(EnumType.STRING)
  private InformType type;

  @ManyToOne
  private Department fromDepartment;

  @ManyToOne
  private User fromUser;

  @ManyToOne
  private Department destDepartment;

  @ManyToOne
  private User destUser;

  @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_inform_id")
  private List<Matter> matter;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_inform_id")
  private List<Attach> attach;

}
