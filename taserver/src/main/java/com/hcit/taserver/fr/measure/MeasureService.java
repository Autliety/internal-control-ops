package com.hcit.taserver.fr.measure;


import com.hcit.taserver.fr.matter.MatterService;
import com.hcit.taserver.fr.progress.ProgressService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeasureService {

  private final MeasureRepository measureRepository;
  private final MatterService matterService;
  private final ProgressService progressService;

  public List<Measure> findAll() {
    return measureRepository.findAll();
  }

  public Measure findById(Long id) {
    return measureRepository.findById(id).orElseThrow();
  }

  public Measure create(Measure m) {
    // todo code
    m.setId(null);
    m.setProgress(progressService.create(m));
    measureRepository.saveAndFlush(m);
    matterService.updateMeasure(m.getMatter().getId());
    return m;
  }

}
