package com.hcit.taserver.ta.assessment;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssessmentRepository extends JpaRepository<Assessment, Integer> {

  List<Assessment> findAllByParentId(Integer id);
}
