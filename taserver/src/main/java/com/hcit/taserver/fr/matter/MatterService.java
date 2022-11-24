package com.hcit.taserver.fr.matter;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.Privilege;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserService;
import com.hcit.taserver.fr.matter.form.MatterForm;
import com.hcit.taserver.fr.matter.form.MatterFormRepository;
import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MatterService {

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

  public Matter findMatterById(Long id) {
    return matterRepository.findById(id).orElseThrow();
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
    matters.forEach(m -> m.setMatterForm(form));
    matterRepository.saveAll(matters);
    form.setMatters(matters);
    matterFormRepository.save(form);
//    matterRepository.deleteAllByMatterFormIsNull();
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

}
