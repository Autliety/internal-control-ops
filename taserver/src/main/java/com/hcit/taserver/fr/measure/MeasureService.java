package com.hcit.taserver.fr.measure;


import static com.hcit.taserver.common.BasicPersistableService.ToMap;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.fr.matter.MatterRepository;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeasureService implements BasicPersistableService<Measure> {

  private final MeasureRepository measureRepository;
  private final MatterRepository matterRepository;

  public List<Measure> findAll() {
    return bindData(measureRepository.findAll());
  }

  public Measure findById(Long id) {
    return bindData(measureRepository.findById(id).orElseThrow());
  }

  @Override
  public Measure bindData(Measure measure) {
    measure.setMatter(matterRepository.findById(measure.getMatterId()).orElseThrow());
    return measure;
  }

  @Override
  public <C extends Collection<Measure>> C bindData(C measures) {
    var map = ToMap(
        matterRepository.findAllById(
            measures.stream().map(Measure::getMatterId).collect(Collectors.toSet())));
    measures.forEach(m -> m.setMatter(map.get(m.getMatterId())));
    return measures;
  }

}
