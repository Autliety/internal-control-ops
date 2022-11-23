package com.hcit.taserver.fr.evaluation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class EvaluationService {

  private final EvaluationRepository evaluationRepository;


  public List<Evaluation> findAll() {
    return evaluationRepository.findAll();
  }

  public List<Evaluation> findAllByPage(Integer page) {
    return evaluationRepository.findAllByPage(page);
  }
}
