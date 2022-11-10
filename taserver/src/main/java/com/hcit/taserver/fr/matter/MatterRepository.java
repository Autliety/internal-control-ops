package com.hcit.taserver.fr.matter;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MatterRepository extends JpaRepository<Matter, Long> {

  void deleteAllByMatterFormIsNull();
}
