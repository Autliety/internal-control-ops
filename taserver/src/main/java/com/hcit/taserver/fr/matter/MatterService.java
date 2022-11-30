package com.hcit.taserver.fr.matter;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MatterService {

  private final MatterRepository matterRepository;

  public Matter findById(Long id) {
    return matterRepository.findById(id).orElseThrow();
  }

  public Matter update(Matter matter) {
    return matterRepository.save(matter);
  }

  public void delete(Long id) {
    matterRepository.deleteById(id);
  }
}
