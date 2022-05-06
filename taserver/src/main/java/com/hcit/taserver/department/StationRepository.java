package com.hcit.taserver.department;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface StationRepository extends JpaRepository<Station, Long> {

  Collection<Station> findAllByDeptId(Long deptId);

}
