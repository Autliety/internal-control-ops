package com.hcit.taserver.fr.matter;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.DepartmentRepository;
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
  private final DepartmentRepository departmentRepository;

  public List<Matter> findAll() {
    return bindData(matterRepository.findAll());
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
    entity.setDepartment(departmentRepository.findById(entity.getDeptId()).orElseThrow());
    return entity;
  }

  @Deprecated
  public Matter update(Long id) {
    var m = matterRepository.findById(id).orElseThrow();
    m.setStatus(Status.REVIEWED);
    return bindData(matterRepository.save(m));
  }

  // todo optimize: bulk bind

}
