package com.hcit.taserver.fr.progress;

import com.hcit.taserver.common.Status;
import com.hcit.taserver.fr.measure.Measure;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ProgressService {

  private final ProgressRepository progressRepository;

  public Progress findById(Long id) {
    return progressRepository.findById(id).orElseThrow();
  }

  public Progress create(Measure measure) {
    return Progress.builder()
        .measure(measure)
        .status(Status.NONE_REVIEW)
        .percentage(0)
        .build();
  }

  public Progress update(Long id, Progress update) {
    var progress = progressRepository.findById(id).orElseThrow();
    progress.setContent(update.getContent());
    progress.setPercentage(update.getPercentage());
    progress.setReason(update.getReason());

    if (update.getStatus() == Status.AWAITING_REVIEW) {
      progress.setStatus(Status.AWAITING_REVIEW);

    } else if (update.getStatus() != Status.NONE_REVIEW) {
      throw new IllegalStateException("不允许更新");
    }

    return progressRepository.save(progress);
  }

  public Progress onReviewed(Progress progress) {
    progress.setStatus(Status.REVIEWED);
    return progressRepository.save(progress);
  }
}
