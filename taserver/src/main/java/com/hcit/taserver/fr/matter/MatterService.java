package com.hcit.taserver.fr.matter;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.UserService;
import com.hcit.taserver.fr.measure.MeasureRepository;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MatterService implements BasicPersistableService<Matter> {

  private final MatterRepository matterRepository;
  private final MeasureRepository measureRepository;
  private final UserService userService;

  public List<Matter> findAll() {
    return bindData(matterRepository.findAllByStatusNot(Status.AWAITING_REVIEW));
  }

  public Matter findById(Long id) {
    return bindData(matterRepository.findById(id).orElseThrow());
  }

  public List<Matter> create(Collection<Matter> matters) {
    // todo generate code
    matters.forEach(m -> m.setMeasureStatus(Status.AWAITING_REVIEW)); // todo temporary
    return bindData(matterRepository.saveAll(matters));
  }

  @Override
  public Matter bindData(Matter entity) {
    entity.setMeasures(measureRepository.findAllByMatterId(entity.getId()));
    if (entity.getUserId() != null) {
      entity.setUser(userService.findById(entity.getUserId()));
    }
    return entity;
  }

  @Deprecated
  public Matter update(Long id) {
    var m = matterRepository.findById(id).orElseThrow();
    m.setMeasureStatus(Status.REVIEWED);
    return bindData(matterRepository.save(m));
  }

  @Deprecated
  public List<Matter> update(String ids) {
    var idArray = ids.split(",");
    var matters = matterRepository.findAllById(Stream.of(idArray).map(Long::new).collect(Collectors.toList()));
    matters.forEach(m -> m.setStatus(Status.REVIEWED));
    return bindData(matterRepository.saveAll(matters));
  }

  // todo optimize: bulk bind

}
