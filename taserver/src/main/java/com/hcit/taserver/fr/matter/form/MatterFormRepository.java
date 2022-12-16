package com.hcit.taserver.fr.matter.form;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface MatterFormRepository extends JpaRepository<MatterForm, Long>, JpaSpecificationExecutor<MatterForm> {

  MatterForm findByUserIdAndYear(Long userId, Integer year);

  MatterForm findByUserId(Long userId);
}
