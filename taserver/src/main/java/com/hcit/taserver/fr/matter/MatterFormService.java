package com.hcit.taserver.fr.matter;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.department.user.AuthService;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MatterFormService {

  private final MatterFormRepository matterFormRepository;
  private final AuthService authService;
  private final ApprovalService approvalService;

  public List<MatterForm> getAllForCurrentUser() {
    return matterFormRepository.findAll((root, query, cb) ->
        query.where(authService.getPrivilegePredicate(root, cb)).getRestriction());
  }

  public MatterForm findById(Long id) {
    return matterFormRepository.findById(id).orElseThrow();
  }

  public MatterForm update(Long id, List<Matter> matters) {
    var form = findById(id);
    form.setMatters(matters);
    return matterFormRepository.save(form);
  }

  public MatterForm create(boolean isDeptSpecForm) {
    var form = MatterForm.builder()
        .user(authService.getCurrentUser())
        .year(LocalDateTime.now().getYear())
        .build();
    if (isDeptSpecForm) {
      form.setMatters(getAllForCurrentUser().stream().flatMap(f -> f.getMatters().stream()).distinct()
          .collect(Collectors.toList()));
    }
    matterFormRepository.save(form);
    approvalService.generate(a -> a.withApprovalType("matterForm").withMatterForm(form), isDeptSpecForm);
    return form;
  }
}
