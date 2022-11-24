package com.hcit.taserver.fr.three;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ThreeService {

  private final ThreeRepository threeRepository;

  private final AuthService authService;

  private final ApprovalService approvalService;

  public List<Three> findAll() {
    return threeRepository.findAll(
        (root, query, cb) -> query.where(authService.getPrivilegePredicate(root, cb, root.get("requestUser")))
            .getRestriction());
  }

  public Three findById(Long id) {
    return threeRepository.findById(id).orElseThrow();
  }

  public Three create(Three three) {
    var result = threeRepository.save(
        Three.builder()
            .statusStep(0)
            .requestUser(authService.getCurrentUser())
            .requestTitle(three.getRequestTitle())
            .requestContent(three.getRequestContent())
            .requestSource(three.getRequestSource())
            .requestAttach(three.getRequestAttach())
            .requestDate(three.getRequestDate())
            .build());
    var approval = approvalService.generate(a -> a.withApprovalType("three").withThree(result),
        User.of(1L), null);
    approvalService.stepIn(approval.getId(), Status.AWAITING_REVIEW, null);
    return result;
  }

  public Three update(Long id, Three three) {
    var origin = threeRepository.findById(id).orElseThrow();
    if (!origin.getApprovalStatus().isEditable() && origin.getApprovalStatus() != Status.REVIEWED) {
      throw new UnsupportedOperationException();
    }
    three.setId(id);
    return threeRepository.save(three);
  }
}
