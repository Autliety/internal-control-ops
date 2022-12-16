package com.hcit.taserver.fr.matter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MatterRepository extends JpaRepository<Matter, Long>, JpaSpecificationExecutor<Matter> {

  List<Matter> findByMatterFormId(Long id);

  @Query(value = "select id from fr_measure where matter_id = ?1",nativeQuery = true)
  List<Long> findByMatterId(Long id);
}
