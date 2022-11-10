package com.hcit.taserver.fr.matter;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.department.user.UserService;
import com.hcit.taserver.fr.matter.form.MatterForm;
import com.hcit.taserver.fr.matter.form.MatterFormRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
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
    var formList = matterFormRepository.findAll((root, query, cb) ->
        query.where(
                cb.and(authService.getPrivilegePredicate(root, cb, origin.getUser())), cb.equal(root.get("year"), 2022))
            .getRestriction());
    origin.setChildren(
        formList.stream().filter(f -> !Objects.equals(f.getId(), origin.getId())).collect(Collectors.toList()));
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
    return mapWithChildren(matterFormRepository.findByUserAndYear(authService.getCurrentUser(), 2022));
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
    var form = matterFormRepository.findByUserAndYear(user, 2022);
    matters.forEach(m -> {
      m.setId(null);
      m.setMatterForm(form);
    });
    return matterRepository.saveAll(matters);
  }

  public MatterForm create() {
    var form = MatterForm.builder()
        .user(authService.getCurrentUser())
        .year(LocalDateTime.now().getYear())
        .build();
    matterFormRepository.save(form);
    approvalService.generate(a -> a.withApprovalType("matterForm").withMatterForm(form), true);
    return form;
  }

  public void createAnnually() {
    var forms = userService.findAll()
        .stream()
        .map(u -> MatterForm.builder()
            .user(u)
            .year(2022)
            .build())
        .collect(Collectors.toList());
    matterFormRepository.saveAll(forms);
    forms.forEach(f -> approvalService.generate(a -> a.withApprovalType("matterForm").withMatterForm(f), true));
  }

}
