package com.hcit.taserver.fr.three;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ThreeRepository extends JpaRepository<Three, Long>, JpaSpecificationExecutor<Three> {

}
