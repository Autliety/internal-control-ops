package com.hcit.taserver.fr.motion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface MotionRepository extends JpaRepository<Motion, Long>, JpaSpecificationExecutor<Motion> {

}
