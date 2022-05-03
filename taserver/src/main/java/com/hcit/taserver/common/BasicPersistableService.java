package com.hcit.taserver.common;

import java.util.Collection;
import java.util.Map;
import java.util.stream.Collectors;

public interface BasicPersistableService<E extends BasicPersistable> {

  static <T extends BasicPersistable> Map<Long, T> ToMap(Collection<T> collection) {
    return collection.stream().collect(Collectors.toMap(BasicPersistable::getId, t -> t));
  }

  static <T extends BasicPersistable> Map<Long, T> ToMap(T[] array) {
    return ToMap(java.util.Arrays.asList(array));
  }

  default E bindData(E entity) {
    return entity;
  }

  default <C extends Collection<E>> C bindData(C entities) {
    if (entities == null) {
      throw new IllegalArgumentException("Entity collections should not be null");
    }
    entities.forEach(this::bindData);
    return entities;
  }

}
