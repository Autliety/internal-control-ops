package com.hcit.taserver.fr.evaluation.userEva;

import com.fasterxml.jackson.annotation.JsonUnwrapped;
import com.hcit.taserver.department.user.User;
import java.math.BigDecimal;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.commons.lang3.builder.EqualsExclude;
import org.hibernate.annotations.DynamicUpdate;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@DynamicUpdate
@Entity
@Table(name = "fr_user_evaluation")
public class UserEvaluation {

  @EmbeddedId
  @JsonUnwrapped
  @EqualsExclude
  private Key id;

  @ManyToOne
  private User leaderUser;

  private BigDecimal self;

  private BigDecimal leader;

  private BigDecimal auto;

  private BigDecimal total;
}
