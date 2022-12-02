package com.hcit.taserver.fr.evaluation.userEva;

import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.evaluation.Evaluation;
import java.io.Serializable;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import lombok.Data;

@Data
@Embeddable
public class Key implements Serializable {

  @ManyToOne
  private User user;

  @ManyToOne
  private Evaluation evaluation;
}
