package com.hcit.taserver.fr.matter;

import com.hcit.taserver.fr.progress.ProgressService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

@RequiredArgsConstructor
@Service
public class MatterService {

  private final MatterRepository matterRepository;
  private final ProgressService progressService;

  public Matter findById(Long id) {
    return matterRepository.findById(id).orElseThrow();
  }

  public Matter update(Matter matter) {
    if (!CollectionUtils.isEmpty(matter.getMeasure())) {
      matter.getMeasure().forEach(ms -> {
        ms.setMatter(matter);
        if (ms.getProgress() == null) {
          ms.setProgress(progressService.create(ms));
        }
      });
    }
    return matterRepository.save(matter);
  }

  public void delete(Long id) {
    matterRepository.deleteById(id);
  }
}
