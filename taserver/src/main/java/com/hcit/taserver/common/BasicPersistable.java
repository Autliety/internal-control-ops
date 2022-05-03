package com.hcit.taserver.common;

import org.springframework.data.domain.Persistable;

public interface BasicPersistable extends Persistable<Long> {
  @Override
  Long getId();

  void setId(Long id);

  @Override
  default boolean isNew() {
    return getId() == null;
  }

}
