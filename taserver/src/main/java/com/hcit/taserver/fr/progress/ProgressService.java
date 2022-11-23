package com.hcit.taserver.fr.progress;

import com.hcit.taserver.approval.ApprovalAdaptor;
import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.fr.measure.Measure;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ProgressService implements ApprovalAdaptor {

  private final ProgressRepository progressRepository;
  private final ApprovalService approvalService;

  public Progress findById(Long id) {
    return progressRepository.findById(id).orElseThrow();
  }

  public Progress create(Measure measure) {
    var p = Progress.builder()
        .measure(measure)
        .status(Status.NONE_REVIEW)
        .percentage(0)
        .build();
    progressRepository.save(p);
    approvalService.generate(a -> a.withApprovalType("progress").withProgress(p));
    return p;
  }

  public Progress update(Long id, Progress update) {
    var progress = progressRepository.findById(id).orElseThrow();
    if (!progress.getStatus().isEditable()) {
      throw new IllegalStateException();
    }
    progress.setContent(update.getContent());
    progress.setPercentage(update.getPercentage());
    progress.setReason(update.getReason());
    progress.setSubUser(update.getSubUser());
    progress.setAttach(update.getAttach());
    return progressRepository.save(progress);
  }
}
