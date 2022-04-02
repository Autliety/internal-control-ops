package com.hcit.taserver.station;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface StationRepository extends JpaRepository<Station, Integer> {

  Collection<Station> findAllByDeptId(Integer deptId);

}
