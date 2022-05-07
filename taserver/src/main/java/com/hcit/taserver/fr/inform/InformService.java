package com.hcit.taserver.fr.inform;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.fr.matter.MatterRepository;
import com.hcit.taserver.fr.matter.MatterService;
import com.hcit.taserver.fr.matter.MatterSource;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

@RequiredArgsConstructor
@Service
public class InformService implements BasicPersistableService<Inform> {

  private final InformRepository informRepository;
  private final MatterService matterService;
  private final MatterRepository matterRepository;

  public List<Inform> findAll() {
    return informRepository.findAll();
  }

  public Inform findById(Long id) {
    return bindData(informRepository.findById(id).orElseThrow());
  }

  public Inform create(Inform inform) {
    if (CollectionUtils.isEmpty(inform.getMatter())) {
      throw new IllegalArgumentException("Matter is required");
    }
    Long informId = informRepository.save(inform).getId();
    inform.getMatter().forEach(m -> {
      m.setId(null);
      m.setSource(MatterSource.INFORM);
      m.setSourceId(informId);
      m.setDeptId(inform.getDestDeptId());
      // todo m.status m.setType() m.setOrigin()
    });
    inform.setMatter(matterService.save(inform.getMatter()));
    return inform;
  }

  @Override
  public Inform bindData(Inform entity) {
    // todo bind dept & user
    entity.setMatter(matterRepository.findAllBySourceAndSourceId(MatterSource.INFORM, entity.getId()));
    return entity;
  }
}
