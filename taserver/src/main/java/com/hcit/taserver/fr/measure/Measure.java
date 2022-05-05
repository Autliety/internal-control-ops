package com.hcit.taserver.fr.measure;

import com.hcit.taserver.common.BasicPersistable;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.user.User;
import io.swagger.annotations.ApiModel;
import java.time.LocalDate;
import java.util.Optional;
import javax.persistence.Entity;
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

@ApiModel("措施")

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
@Table(name = "fr_measure")
public class Measure implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Long matterId;
  @Transient
  private Matter matter;

  private String code;

  public String getCode() {
    return Optional.ofNullable(matter).map(Matter::getCode).orElse("") + "-" + code;
  }

  private String content;

  private Long userId;
  @Transient
  private User user;

  private LocalDate startDate;
  private LocalDate endDate;

}
