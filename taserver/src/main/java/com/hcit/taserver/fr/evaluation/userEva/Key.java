package com.hcit.taserver.fr.evaluation.userEva;

import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.evaluation.Evaluation;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Data
@Embeddable
public class Key implements Serializable {

  @ApiModelProperty("用户Id")
  @ManyToOne
  private User user;

  @ApiModelProperty("评责Id")
  @ManyToOne
  private Evaluation evaluation;
}
