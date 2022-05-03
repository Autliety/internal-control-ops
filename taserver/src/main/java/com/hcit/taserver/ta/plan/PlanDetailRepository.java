package com.hcit.taserver.ta.plan;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanDetailRepository extends JpaRepository<PlanDetail,Integer> {

  List<PlanDetail> findAllByPlanId(Integer id);

}
