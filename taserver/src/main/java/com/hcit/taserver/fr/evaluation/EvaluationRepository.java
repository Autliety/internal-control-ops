package com.hcit.taserver.fr.evaluation;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvaluationRepository extends JpaRepository<Evaluation, Long> {
  List<Evaluation> findAllByPage(Integer page);
}
