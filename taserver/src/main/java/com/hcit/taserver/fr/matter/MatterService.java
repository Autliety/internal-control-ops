package com.hcit.taserver.fr.matter;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.fr.measure.MeasureRepository;
import java.util.Collection;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MatterService implements BasicPersistableService<Matter> {

  private final MatterRepository matterRepository;
  private final MeasureRepository measureRepository;

  public List<Matter> findAll() {
    return matterRepository.findAll();
  }

  public Matter findById(Long id) {
    return bindData(matterRepository.findById(id).orElseThrow());
  }

  public List<Matter> save(Collection<Matter> matters) {
    // todo generate code
    return bindData(matterRepository.saveAll(matters));
  }

  public List<Matter> findAllBySourceAndSourceId(MatterSource source, Long id) {
    return bindData(matterRepository.findAllBySourceAndSourceId(source, id));
  }

  @Override
  public Matter bindData(Matter entity) {
    entity.setMeasures(measureRepository.findAllByMatterId(entity.getId()));
    return entity;
  }

  // todo optimize: bulk bind

}
