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
          Predicate or = cb.disjunction();
          if (formType == FormType.LEARNING) {
            //noinspection ConstantConditions
            or = u.getId().intValue() < 30
                ? cb.lessThan(root.get("destUser").get("id"), 30)
                : cb.equal(root.get("destUser").get("department").get("id"),
                    u.getDepartment().getId());
          } else if (formType == FormType.INSPECT) {
            or = cb.equal(root.joinList("multiDepartment1").get("id"), u.getDepartment().getId());
          } else if (formType == FormType.QUESTION) {
            or = cb.equal(root.get("singleUser1").get("id"), authService.getCurrentUser().getId());
          }
          return query.where(cb.and(
                  cb.or(
                      authService.getPrivilegePredicate(root, cb, root.get("destUser")),
                      or
                  ),
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
    if (!CollectionUtils.isEmpty(f.getMatter())) {
      matters.forEach(m -> m.setOrigin(formType.getRemark()));
      var m = matterService.insertMatters(f.getDestUser(), matters);
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
