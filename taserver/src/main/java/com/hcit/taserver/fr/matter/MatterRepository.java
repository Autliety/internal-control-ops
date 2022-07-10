package com.hcit.taserver.fr.matter;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface MatterRepository extends JpaRepository<Matter, Long>, JpaSpecificationExecutor<Matter> {

}
