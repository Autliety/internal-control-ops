package com.hcit.taserver.fr.inform;

import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.fr.matter.form.MatterFormService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

@RequiredArgsConstructor
@Service
public class InformService {

  private final InformRepository informRepository;
  private final MatterFormService matterFormService;
  private final AuthService authService;

  public List<Inform> findAll() {
    return informRepository.findAll(
        (root, query, cb) -> query.where(authService.getPrivilegePredicate(root, cb, root.get("destUser")))
            .getRestriction());
  }

  public Inform findById(Long id) {
    return informRepository.findById(id).orElseThrow();
  }

  public Inform create(Inform inform) {
    if (inform.getType() == InformType.ANNOUNCE) {
      inform.setMatter(null);
    } else {
      var matters = inform.getMatter();
      if (CollectionUtils.isEmpty(matters)) {
        throw new IllegalArgumentException("Matter is required");
      }
      matters.forEach(m -> {
        m.setOrigin("镇本级/区（镇）反馈、交办/一单三书");
        m.setContent(inform.getContent());
      });
      matterFormService.insertMatters(inform.getDestUser(), matters);
    }
    return informRepository.save(inform);
  }

}
