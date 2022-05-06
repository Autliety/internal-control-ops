package com.hcit.taserver.fr.inform;

import com.hcit.taserver.common.BasicPersistableService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class InformService implements BasicPersistableService<Inform> {

  private final InformRepository informRepository;

  public List<Inform> findAll() {
    return informRepository.findAll();
  }

  public Inform findById(Long id) {
    return informRepository.findById(id).orElseThrow();
  }

  public Inform create(Inform inform) {
    return informRepository.save(inform);
  }

}
