package com.hcit.taserver.fr.matter;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
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
    return matterRepository.saveAll(matters);
  }

  public List<Matter> updateAll(List<Matter> matters) {
    // has a better way
    create(matters.stream().filter(m -> m.getId() == null).collect(Collectors.toList()));
    return matterRepository.saveAll(matters.stream().filter(m -> m.getId() != null).collect(Collectors.toList()));
  }

  public void onReviewed(Matter matter) {
    matter.setMeasureStatus(Status.REVIEWED);
    matterRepository.save(matter);
  }

  public Matter updateMeasure(Long id) {
    var matter = matterRepository.findById(id).orElseThrow();
    matter.setMeasureStatus(Status.AWAITING_REVIEW);
    if (matter.getApproval() == null) {
      approvalService.generate(Approval.builder().approveUser(User.builder().id(1L).build()).build(), matter); // todo get the right approve user
    } else {
      approvalService.reset(matter.getApproval());
    }
    return matterRepository.save(matter);
  }
}
