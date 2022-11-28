package com.hcit.taserver.fr.motion;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MotionService {

  private final MotionRepository motionRepository;

  private final AuthService authService;

  private final ApprovalService approvalService;

  public List<Motion> findAll() {
    return motionRepository.findAll(
        (root, query, cb) -> query.where(authService.getPrivilegePredicate(root, cb, root.get("requestUser")))
            .getRestriction());
  }

  public Motion findById(Long id) {
    return motionRepository.findById(id).orElseThrow();
  }

  public Motion create(Motion motion) {
    var result = motionRepository.save(
        Motion.builder()
            .integer1(1)
            .requestUser(authService.getCurrentUser())
            .requestTitle(motion.getRequestTitle())
            .requestContent(motion.getRequestContent())
            .requestTime(motion.getRequestTime())
            .requestAttach(motion.getRequestAttach())
            .build());
    var approval = approvalService.generate(a -> a.withApprovalType("motion").withMotion(result),
        User.of(1L), null);
    approvalService.stepIn(approval.getId(), Status.AWAITING_REVIEW, null);
    return result;
  }

  public Motion update(Long id, Motion motion) {
    var origin = motionRepository.findById(id).orElseThrow();
    if (!origin.getApprovalStatus().isEditable() && origin.getApprovalStatus() != Status.REVIEWED) {
      throw new UnsupportedOperationException();
    }
    motion.setId(id);
    motion.setApproval(origin.getApproval());
    return motionRepository.save(motion);
  }
}
