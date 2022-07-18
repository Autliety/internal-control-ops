package com.hcit.taserver.fr.matter;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.Privilege;
import com.hcit.taserver.department.user.UserRepository;
import com.hcit.taserver.fr.progress.ProgressService;
import java.util.Collection;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

@RequiredArgsConstructor
@Service
public class MatterService {

  private final MatterRepository matterRepository;
  private final ApprovalService approvalService;
  private final ProgressService progressService;
  private final AuthService authService;
  private final UserRepository userRepository;

  public List<Matter> findAll() {
    return matterRepository.findAll(
        (root, query, cb) -> query.where(authService.getPrivilegePredicate(root, cb)).getRestriction());
  }

  public Matter findById(Long id) {
    return matterRepository.findById(id).orElseThrow();
  }

  public List<Matter> createAll(Collection<Matter> matters) {
    matters.forEach(m -> {
      // todo generate code
      m.setStatus(Status.NONE_REVIEW);
      m.setId(null);
      m.setUser(authService.getCurrentUser());
    });
    return matterRepository.saveAll(matters);
  }

  public List<Matter> createAllWithoutApprove(Collection<Matter> matters) {
    matters.forEach(m -> {
      // todo generate code
      m.setStatus(Status.REVIEWED);
      m.setStepTwoStatus(Status.REVIEWED);
      m.setId(null);
      if (!CollectionUtils.isEmpty(m.getMeasure())) {
        m.getMeasure().forEach(s -> {
          s.setMatter(m);
          s.setProgress(progressService.create(s));
        });
      }
    });
    return matterRepository.saveAll(matters);
  }

  public Approval submitApproval() {
    var matters = matterRepository.findAllByUserAndStatus(authService.getCurrentUser(), Status.NONE_REVIEW);
    if (CollectionUtils.isEmpty(matters)) {
      if (authService.getCurrentUser().getPrivilege() != Privilege.DEPT) {
        throw new IllegalArgumentException("需要审批的问题清单为空");
      }
      matters = matterRepository.findAllByUserInAndStepTwoStatusIn(
          userRepository.findAllByDepartmentIdOrderByUserOrderDesc(authService.getCurrentUser().getDepartment().getId())
          ,
          List.of(Status.NONE_REVIEW)
      );
      matters.forEach(m -> m.setStepTwoStatus(Status.AWAITING_REVIEW));
    } else {
      matters.forEach(m -> m.setStatus(Status.AWAITING_REVIEW));
    }
    return approvalService.generate(Approval.builder().approveUser(approvalService.getDefaultApproveUser()).build(),
        matters);
  }

  public void onReviewed(List<Matter> matter) {
    if (matter.get(0).getStatus() == Status.REVIEWED) {
      matter.forEach(m -> m.setStepTwoStatus(Status.REVIEWED));
    } else {
      matter.forEach(m -> {
        m.setStatus(Status.REVIEWED);
        m.setStepTwoStatus(Status.NONE_REVIEW);
      });
    }
    matterRepository.saveAll(matter);
  }

}
