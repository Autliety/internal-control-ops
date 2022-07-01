package com.hcit.taserver.fr.ordinal;

import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.fr.matter.MatterService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

@RequiredArgsConstructor
@Service
public class OrdinalFormService {

  private final OrdinalFormRepository ordinalFormRepository;
  private final AuthService authService;
  private final MatterService matterService;

  public List<OrdinalForm> findAllByFormType(FormType formType) {
    return ordinalFormRepository.findAllByFormType(formType);
  }

  public OrdinalForm findByFormTypeAndId(FormType formType, Long id) {
    var form = ordinalFormRepository.findById(id).orElseThrow();
    if (form.getFormType() != formType) {
      throw new IllegalArgumentException("错误的formType常规表单类型");
    }
    return form;
  }

  public OrdinalForm create(FormType formType, OrdinalForm f) {
    f.setId(null);
    f.setFormType(formType);
    f.setRequestUser(authService.getCurrentUser());

    var matters = f.getMatter();
    f.setMatter(null);
    if (!CollectionUtils.isEmpty(matters)) {
      matters.forEach(m -> {
        m.setId(null);
        m.setOrigin(formType.getRemark());
        m.setUser(f.getDestUser());
      });
      var m = matterService.create(matters);
      f.setMatter(m);
    }

    return ordinalFormRepository.save(f);
  }
}
