package com.hcit.taserver.measure;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@RequiredArgsConstructor
@Service
public class MeasureService {
  private final MeasureRepository measureRepository;

  public List<Measure> findAllByPlanId(Integer id) {
    return measureRepository.findAllByPlanId(id);
  }
}
