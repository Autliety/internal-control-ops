package com.hcit.taserver.fr.ordinal;

import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.department.user.User;
import com.hcit.taserver.fr.matter.MatterService;
import java.util.List;
import javax.persistence.criteria.Predicate;
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
    User u = authService.getCurrentUser();
    return ordinalFormRepository.findAll((root, query, cb) -> {
          Predicate or = null;
          if (formType == FormType.LEARNING) {
            or = u.getId().intValue() < 30
                ? cb.lessThan(root.get("destUser").get("id"), 30)
                : cb.equal(root.get("destUser").get("department").get("id"),
                    u.getDepartment().getId());
          }
          else if (formType == FormType.INSPECT) {
            or = cb.equal(root.joinList("multiDepartment1").get("id"), u.getDepartment().getId());
          }
          return query.where(cb.and(
              authService.getPrivilegePredicate(root, cb, or, root.get("destUser")),
              cb.equal(root.get("formType"), formType)
          ))
              .distinct(true)
              .getRestriction();
        }
    );
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
    if (f.getDestUser() == null) {
      f.setDestUser(authService.getCurrentUser());
    }

    var matters = f.getMatter();
    f.setMatter(null);
    if (!CollectionUtils.isEmpty(matters)) {
      matters.forEach(m -> {
        m.setId(null);
        m.setOrigin(formType.getRemark());
        if (m.getUser() == null) {
          m.setUser(f.getDestUser());
        }
      });
      var m = matterService.create(matters);
      f.setMatter(m);
    }

    return ordinalFormRepository.save(f);
  }

  public OrdinalForm update(Long id, OrdinalForm ordinalForm) {
    if (!ordinalForm.getId().equals(id)) {
      throw new IllegalArgumentException("OrdinalForm is empty");
    } else {
      return ordinalFormRepository.save(ordinalForm);
    }
  }
}
