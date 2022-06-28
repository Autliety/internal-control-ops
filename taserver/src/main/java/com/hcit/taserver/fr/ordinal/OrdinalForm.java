package com.hcit.taserver.fr.ordinal;

import com.hcit.taserver.attach.Attach;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.matter.Matter;
import io.swagger.annotations.ApiModel;
import java.time.LocalDateTime;
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
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.UpdateTimestamp;

@ApiModel("常规表单")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_ordinal_form")
public class OrdinalForm {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Enumerated(EnumType.STRING)
  private FormType formType;
  public String getFormTypeRemark() {
    return formType == null ? null : formType.getRemark();
  }

  @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_ordinal_form_id")
  private List<Matter> matter;

  @OneToMany(fetch = FetchType.EAGER)
  @Fetch(FetchMode.SUBSELECT)
  @JoinColumn(name = "source_ordinal_form_id")
  private List<Attach> attach;

  @ManyToOne
  private User requestUser;
  @ManyToOne
  private User destUser;
  @CreationTimestamp
  private LocalDateTime createTime;
  @UpdateTimestamp
  private LocalDateTime updateTime;

  private String content1;
  private String content2;
  private String content3;
  private String content4;
  private String content5;
  private String content6;
  private String content7;
  private String content8;
  private String content9;
  @Column(columnDefinition = "LONGTEXT")
  private String longContent1;
  @Column(columnDefinition = "LONGTEXT")
  private String longContent2;
  @ManyToOne
  private User singleUser1;
  @ManyToOne
  private User singleUser2;

  private LocalDateTime time1;
  private LocalDateTime time2;
  private LocalDateTime time3;
}