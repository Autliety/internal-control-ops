package com.hcit.taserver.common;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.domain.Persistable;

public interface BasicPersistable extends Persistable<Long> {
  @Override
  Long getId();

  void setId(Long id);

  @Override
  @JsonIgnore
  default boolean isNew() {
    return getId() == null;
  }

}
