package com.hcit.taserver.fr.matter.form;

import com.hcit.taserver.approval.Approval;
import com.hcit.taserver.approval.ApprovalAdaptor;
import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.Privilege;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserService;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.matter.MatterRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MatterFormService implements ApprovalAdaptor {

  private final MatterFormRepository matterFormRepository;
  private final MatterRepository matterRepository;
  private final AuthService authService;
  private final ApprovalService approvalService;
  private final UserService userService;

  private MatterForm mapWithChildren(MatterForm origin) {
    if (origin == null) {
      return null;
    }
    var formList = matterFormRepository.findAll((root, query, cb) ->
        query.where(
                cb.and(
                    authService.getPrivilegePredicate(root, cb, origin.getUser()),
                cb.notEqual(root.get("id"), origin.getId()),
                cb.equal(root.get("year"), 2022))
            )
            .getRestriction());
    origin.setChildren(formList);
    return origin;
  }

  public MatterForm findById(Long id, boolean withChildren) {
    var form = matterFormRepository.findById(id).orElseThrow();
    return withChildren ? mapWithChildren(form) : form;
  }

  public MatterForm findByCurrent() {
    var user = authService.getCurrentUser();
    if (user.getPrivilege() == Privilege.ADMIN) {
      user = userService.findById(1L);
    }
    return mapWithChildren(matterFormRepository.findByUserIdAndYear(user.getId(), 2022));
  }

  public MatterForm update(Long id, List<Matter> matters) {
    var form = findById(id, false);
    if (Optional.ofNullable(form.getApproval()).map(Approval::getStatus).orElse(Status.PASSED).isEditable()) {
      // todo edit matter&measure
    } else if (Optional.ofNullable(form.getProgressApproval()).map(Approval::getStatus).orElse(Status.FINISHED).isEditable()) {
      // edit progress
    }
    matters.forEach(m -> m.setMatterForm(form));
    matterRepository.saveAll(matters);
    form.setMatters(matters);
    matterFormRepository.save(form);
    return form;
  }

  public List<Matter> insertMatters(User user, List<Matter> matters) {
    var form = matterFormRepository.findByUserIdAndYear(user.getId(), 2022);
    matters.forEach(m -> {
      m.setId(null);
      m.setMatterForm(form);
    });
    return matterRepository.saveAll(matters);
  }

  public MatterForm create(User user) {
    if (user == null) {
      user = authService.getCurrentUser();
    }
    var form = MatterForm.builder()
        .user(user)
        .year(LocalDateTime.now().getYear())
        .build();
    matterFormRepository.save(form);
    approvalService.generate(a -> a.withApprovalType("matterForm").withMatterForm(form), true);
    return form;
  }

  @Override
  public void onReviewed(Long id) {
    var form = findById(id, false);
    approvalService.generate(a -> a.withApprovalType("progressMatterForm").withProgressMatterForm(form),
        form.getApproval().getApproveUser(),
        null,
        form.getApproval().getRequestUser());
  }
}
