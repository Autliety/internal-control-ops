package com.hcit.taserver.fr.inform;

import com.hcit.taserver.fr.matter.MatterService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

@RequiredArgsConstructor
@Service
public class InformService {

  private final InformRepository informRepository;
  private final MatterService matterService;

  public List<Inform> findAll() {
    return informRepository.findAll();
  }

  public Inform findById(Long id) {
    return informRepository.findById(id).orElseThrow();
  }

  public Inform create(Inform inform) {
    var matters = inform.getMatter();
    if (CollectionUtils.isEmpty(matters)) {
      throw new IllegalArgumentException("Matter is required");
    }
    matters.forEach(m -> {
      m.setUser(inform.getDestUser());
    });
    matterService.create(matters);
    return informRepository.saveAndFlush(inform);
  }

}
