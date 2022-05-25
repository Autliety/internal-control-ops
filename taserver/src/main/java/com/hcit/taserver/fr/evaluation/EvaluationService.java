package com.hcit.taserver.fr.evaluation;

import com.hcit.taserver.common.BasicPersistableService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class EvaluationService implements BasicPersistableService<Evaluation> {

  private final EvaluationRepository evaluationRepository;


  public List<Evaluation> findAll() {
    return evaluationRepository.findAll();
  }
}
