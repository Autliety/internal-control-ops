package com.hcit.taserver.fr.three;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ThreeRepository extends JpaRepository<Three, Long>, JpaSpecificationExecutor<Three> {

  List<Three> findByRequestUserId(Long useId);

}
