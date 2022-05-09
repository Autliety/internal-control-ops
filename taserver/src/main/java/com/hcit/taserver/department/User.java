package com.hcit.taserver.department;

import com.hcit.taserver.common.BasicPersistable;
import io.swagger.annotations.ApiModelProperty;
import java.util.Optional;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Entity
public class User implements BasicPersistable {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  private String gender;

  private String phone;

  private Long stationId;
  @ApiModelProperty(hidden = true)
  @Transient
  private Station station;

  @Transient
  public Department getDepartment() {
    return Optional.ofNullable(station).map(Station::getDepartment).orElse(null);
  }

}
