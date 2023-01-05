package com.hcit.taserver.fr.evaluation.userEva;

import com.hcit.taserver.fr.evaluation.userEva.entity.Key;
import com.hcit.taserver.fr.evaluation.userEva.entity.UserEvaluation;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface UserEvaRepository extends JpaRepository<UserEvaluation, Key>, JpaSpecificationExecutor<UserEvaluation> {

  boolean existsById(Key id);

  List<UserEvaluation> findAllById_UserId(Long id);
}