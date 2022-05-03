package com.hcit.taserver.ta.plan;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Integer>, JpaSpecificationExecutor<Plan> {

  List<Plan> findAll();

}
