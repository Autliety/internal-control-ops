package com.hcit.taserver.fr.matter;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import java.util.Collection;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MatterService {

  private final MatterRepository matterRepository;
  private final ApprovalService approvalService;

  public List<Matter> findAll() {
    return matterRepository.findAll();
  }

  public Matter findById(Long id) {
    return matterRepository.findById(id).orElseThrow();
  }

  public List<Matter> create(Collection<Matter> matters) {
    matters.forEach(m -> {
      // todo generate code
      m.setMeasureStatus(Status.AWAITING_REVIEW);
      m.setId(null);
    });
    return matterRepository.saveAllAndFlush(matters);
  }

  public List<Matter> updateMeasures(Collection<Long> ids) {
    var matters = matterRepository.findAllById(ids);
    matters.forEach(m -> {
      m.setMeasureStatus(Status.AWAITING_REVIEW);
      if (m.getApproval() == null) {
        approvalService.generate(1L, m); // todo check the right id
      } else {
        approvalService.reset(m.getApproval());
      }
    });
    return matterRepository.saveAll(matters);
  }

  public List<Matter> updateAll(List<Matter> matters) {
    return matterRepository.saveAll(matters);
  }

  public void onReviewed(Matter matter) {
    matter.setMeasureStatus(Status.REVIEWED);
  }
}
