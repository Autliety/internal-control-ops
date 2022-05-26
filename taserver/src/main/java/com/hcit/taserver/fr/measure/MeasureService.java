package com.hcit.taserver.fr.measure;


import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.matter.MatterService;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeasureService {

  private final MeasureRepository measureRepository;
  private final MatterService matterService;

  public List<Measure> findAll() {
    return measureRepository.findAll();
  }

  public Measure findById(Long id) {
    return measureRepository.findById(id).orElseThrow();
  }

  public List<Measure> create(List<Measure> measures) {
    measures.forEach(m -> m.setId(null));
    measureRepository.saveAllAndFlush(measures);
    matterService.updateMeasures(
        measures.stream()
            .map(Measure::getMatter)
            .filter(Objects::nonNull)
            .map(Matter::getId)
            .collect(Collectors.toList()));

    return measures;
  }

}
