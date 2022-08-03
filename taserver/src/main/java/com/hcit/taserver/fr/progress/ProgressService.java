package com.hcit.taserver.fr.progress;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalAdaptor;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.fr.measure.Measure;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ProgressService implements ApprovalAdaptor {

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

  @Override
  public void onReview(Approval approval) {
    var progress = approval.getProgress();
    progress.setStatus(Status.REVIEWED);
    progressRepository.save(progress);
  }

  @Override
  public void onDenied(Approval approval) {
    var progress = approval.getProgress();
    progress.setStatus(Status.AWAITING_FIX);
    progressRepository.save(progress);
  }

  @Override
  public void onFixed(Approval approval) {
    var progress = approval.getProgress();
    progress.setStatus(Status.AWAITING_REVIEW);
    progressRepository.save(progress);
  }
}
