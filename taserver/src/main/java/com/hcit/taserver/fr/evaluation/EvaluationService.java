package com.hcit.taserver.fr.evaluation;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
