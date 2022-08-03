package com.hcit.taserver.fr.matter;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalAdaptor;
import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.Privilege;
import com.hcit.taserver.department.user.UserRepository;
import com.hcit.taserver.fr.progress.ProgressService;

import java.util.Collection;
import java.util.List;

import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;


@RequiredArgsConstructor
@Service
public class MatterService implements ApprovalAdaptor {

  private final MatterRepository matterRepository;
  private final ApprovalService approvalService;
  private final ProgressService progressService;
  private final AuthService authService;
  private final UserRepository userRepository;

  public List<Matter> findAll() {
    return matterRepository.findAll(
        (root, query, cb) ->
            query.where(authService.getPrivilegePredicate(root, cb)).getRestriction());
  }

  public List<Matter> findByCondition(Matter matter) {     //,Integer code
    Specification<Matter> spec = ((root, query, cb) -> {
      var code = matter.getCode() == null ? cb.conjunction() : cb.like(root.get("code"), "%" + matter.getCode() + "%");
      var status = matter.getStatus() == null ? cb.conjunction() : cb.equal(root.get("status"), matter.getStatus());
      return query.where(cb.and(authService.getPrivilegePredicate(root, cb), code, status))
          .distinct(true)
          .getRestriction();
    });
    return matterRepository.findAll(spec);
  }

  //cb.and(code, status)
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
    List<Matter> matters;
    if (authService.getCurrentUser().getPrivilege() == Privilege.DEPT) {
      // 二审
      matters = matterRepository.findAllByUserInAndStepTwoStatusIn(
          userRepository.findAllByDepartmentIdOrderByUserOrderDesc(authService.getCurrentUser().getDepartment().getId())
          , List.of(Status.NONE_REVIEW));
      if (CollectionUtils.isEmpty(matters)) {
        throw new IllegalArgumentException("需要审批的问题清单为空");
      }

      matters.forEach(m -> m.setStepTwoStatus(Status.AWAITING_REVIEW));
      return approvalService.generate(Approval.builder().approveUser(approvalService.getDefaultApproveUser()).build(),
          matters);

    } else {
      // 初审
      matters = matterRepository.findAllByUserAndStatusIn(authService.getCurrentUser(),
          List.of(Status.NONE_REVIEW, Status.AWAITING_FIX));
      if (CollectionUtils.isEmpty(matters)) {
        throw new IllegalArgumentException("需要审批的问题清单为空");
      }

      var fixes = matters.stream().filter(m -> m.getStatus() == Status.AWAITING_FIX).collect(Collectors.toList());
      if (CollectionUtils.isEmpty(fixes)) {
        // 未审核时提交
        matters.forEach(m -> m.setStatus(Status.AWAITING_REVIEW));
        return approvalService.generate(Approval.builder().approveUser(approvalService.getDefaultApproveUser()).build(),
            matters);
      } else {
        // 退回修改后提交
        var approval = fixes.get(0).getApproval();
        approval.setMatter(matters);
        approvalService.save(approval);
        matters.forEach(m -> {
          m.setStatus(Status.AWAITING_REVIEW);
          m.setApproval(approval);
        });
        matterRepository.saveAll(matters);
        return approvalService.stepIn(approval.getId(), Status.FIXED, null);
      }
    }
  }

  @Override
  public void onReview(Approval approval) {
    var matter = approval.getMatter();
    if (matter.get(0).getStatus() == Status.REVIEWED) {
      matter.forEach(m -> m.setStepTwoStatus(Status.REVIEWED));

    } else {
      matter.forEach(m -> {
        m.setStatus(Status.REVIEWED);
        //noinspection ConstantConditions
        if (m.getUser().getId().intValue() < 30) {
          m.setStepTwoStatus(Status.REVIEWED);
        } else {
          m.setStepTwoStatus(Status.NONE_REVIEW);
        }
      });
    }
    matterRepository.saveAll(matter);
  }

  @Override
  public void onDenied(Approval approval) {
    var matter = approval.getMatter();
    if (matter.get(0).getStatus() == Status.REVIEWED) {
      matter.forEach(m -> m.setStepTwoStatus(Status.AWAITING_FIX));
    } else {
      matter.forEach(m -> m.setStatus(Status.AWAITING_FIX));
    }
  }

  @Override
  public void onFixed(Approval approval) {
    var matter = approval.getMatter();
    if (matter.get(0).getStatus() == Status.REVIEWED) {
      matter.forEach(m -> m.setStepTwoStatus(Status.AWAITING_REVIEW));
    } else {
      matter.forEach(m -> m.setStatus(Status.AWAITING_REVIEW));
    }
  }

  public Matter update(Matter matter) {
    if (!CollectionUtils.isEmpty(matter.getMeasure())) {
      matter.getMeasure().forEach(ms -> {
        // todo generate code
        ms.setMatter(matter);
        if (ms.getProgress() == null) {
          ms.setProgress(progressService.create(ms));
        }
      });
    }
    return matterRepository.save(matter);
  }

  public void delete(Long id) {
    var matter = matterRepository.findById(id).orElseThrow();
    var approval = matter.getApproval();
    if (approval != null) {
      approval.getMatter().remove(matter);
      approvalService.save(approval);
    }
    matterRepository.deleteById(id);
  }
}
