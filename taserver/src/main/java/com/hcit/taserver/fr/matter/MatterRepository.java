package com.hcit.taserver.fr.matter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MatterRepository extends JpaRepository<Matter, Long>, JpaSpecificationExecutor<Matter> {

  List<Matter> findAllByMatterFormId(Long id);

  @Query(value = "select * from fr_matter where source_inform_id = ?1",nativeQuery = true)
  List<Matter> findAllBySourceInformId(Long informId);

}
