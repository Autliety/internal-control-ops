package com.hcit.taserver.fr.evaluation.userEva;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserEvaRepository extends JpaRepository<UserEvaluation,Key> {

  boolean existsById(Key id);

  List<UserEvaluation> findAllById_UserId(Long id);
}