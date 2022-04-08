package com.hcit.taserver.measure;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MeasureRepository extends JpaRepository<Measure,Integer> {
  List<Measure> findAllByPlanId(Integer id);
}
