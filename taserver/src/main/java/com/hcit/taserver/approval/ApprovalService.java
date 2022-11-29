package com.hcit.taserver.approval;

import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.Privilege;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserRepository;
import java.util.List;
import java.util.Optional;
import java.util.function.UnaryOperator;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

@RequiredArgsConstructor
@Service
public class ApprovalService {

  private final ApprovalRepository approvalRepository;
  private final ApprovalStepRepository approvalStepRepository;
  private final AuthService authService;
  private final UserRepository userRepository;
  private final ApplicationContext ctx;

  public Approval findById(Long id) {
    return approvalRepository.findById(id).orElseThrow();
  }

  public List<Approval> getCurrentUserApproved() {
    var user = authService.getCurrentUser();
    return approvalStepRepository.findAllByApproveUser(user)
        .stream()
        .map(ApprovalStep::getApproval)
        .distinct()
        .collect(Collectors.toList());
  }

  public User getDefaultApproveUser(boolean withParent) {
    return getDefaultApproveUser(authService.getCurrentUser(), withParent);
  }

  public User getDefaultApproveUser(User user, boolean withParent) {
    return Optional.ofNullable(withParent ? user.getParent() : null)
        .orElseGet(() -> userRepository.findByDepartmentAndPrivilege(user.getDepartment(), Privilege.DEPT)
            .orElseGet(() -> userRepository.findById(1L)
                .orElseThrow()));
  }

  public Approval generate(UnaryOperator<Approval> mapper) {
    return generate(mapper, null, null);
  }

  public Approval generate(UnaryOperator<Approval> mapper, boolean withParent) {
    return generate(mapper, getDefaultApproveUser(withParent), null);
  }

  public Approval generate(UnaryOperator<Approval> mapper, User approveUser, User copyUser) {
    return generate(mapper, approveUser, copyUser, null);
  }

  public Approval generate(UnaryOperator<Approval> mapper, User approveUser, User copyUser, User requestUser) {
    if (approveUser == null) {
      approveUser = getDefaultApproveUser(true);
    }
    if (requestUser == null) {
      requestUser = authService.getCurrentUser();
    }
    var a = Approval.builder()
        .requestUser(requestUser)
        .approveUser(approveUser)
        .copyUser(copyUser)
        .build();
    a = mapper.apply(a);
    approvalRepository.save(a);
    approvalStepRepository.save(ApprovalStep.builder()
        .approval(a)
        .approveUser(a.getApproveUser())
        .status(Status.NONE_REVIEW)
        .build());
    return a;
  }

  public Approval stepIn(Long id, Status newStatus, String content) {
    var approval = approvalRepository.findById(id).orElseThrow();
    var steps = approvalStepRepository.findAllByApprovalId(id);
    var lastStep = CollectionUtils.lastElement(steps);
    if (lastStep == null) {
      throw new IllegalStateException();
    }
    var lastStatus = lastStep.getStatus();

    // 提交
    if (lastStatus == Status.NONE_REVIEW && newStatus == Status.AWAITING_REVIEW) {
      if (!authService.isCurrentUser(approval.getRequestUser())) {
        throw new IllegalStateException("不正确的提交人");
      }
      lastStep.setStatus(Status.AWAITING_REVIEW);
    }

    // 审批
    else if (lastStatus == Status.AWAITING_REVIEW) {
      if (!authService.isCurrentUser(approval.getApproveUser())) {
        throw new IllegalStateException("不正确的审核人");
      }
      // 通过
      if (newStatus == Status.REVIEWED) {
        lastStep.setStatus(Status.REVIEWED);
/* todo
        if (approval.getMatterForm() != null) {
          ctx.getBean("matterFormService", MatterFormService.class).onReviewed(approval.getMatterForm().getId());
        }
*/
      }
      // 不通过
      else if (newStatus == Status.REVIEW_DENIED) {
        lastStep.setStatus(Status.REVIEW_DENIED);
        lastStep.setContent(content);

        steps.add(ApprovalStep.builder()
            .approval(approval)
            .approveUser(approval.getRequestUser())
            .status(Status.AWAITING_FIX)
            .build());
      } else {
        throw new IllegalArgumentException("不正确的新审批状态");
      }
    }

    // 退回修改
    else if (lastStatus == Status.AWAITING_FIX && newStatus == Status.FIXED) {
      if (!authService.isCurrentUser(approval.getRequestUser())) {
        throw new IllegalStateException("不正确的提交人");
      }
      lastStep.setStatus(Status.FIXED);
      lastStep.setContent(content);

      steps.add(ApprovalStep.builder()
          .approval(approval)
          .approveUser(approval.getApproveUser())
          .status(Status.AWAITING_REVIEW)
          .build());
    } else {
      throw new UnsupportedOperationException();
    }

    approvalStepRepository.saveAll(steps);
    return approval;
  }


}
