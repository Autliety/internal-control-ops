package com.hcit.taserver.fr.evaluation.userEva.entity;

import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.evaluation.Evaluation;
import java.io.Serializable;
import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Embeddable
public class Key implements Serializable {

  @ManyToOne
  private User user;

  @ManyToOne
  private Evaluation evaluation;
}
