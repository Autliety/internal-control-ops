package com.hcit.taserver.fr.alert;

import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.matter.MatterRepository;
import com.hcit.taserver.fr.matter.measure.Measure;
import com.hcit.taserver.fr.three.Three;
import com.hcit.taserver.fr.three.ThreeRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AlertService {

  private final AuthService authService;
  private final MatterRepository matterRepository;
  private final ThreeRepository threeRepository;

  public List<Matter> getAlertMatters(boolean isSelfOnly) {
    var matters = matterRepository.findAll((root, query, cb) ->
        query.where(
                cb.and(
                    cb.equal(root.get("matterForm").get("year"), 2022),
                    cb.lessThan(root.get("endDate"), LocalDate.now()),
                    isSelfOnly
                        ? cb.equal(root.get("matterForm").get("user").get("id"), authService.getCurrentUser().getId())
                        : authService.getPrivilegePredicate(root, cb, root.get("matterForm").get("user"))
                )
            )
            .getRestriction()
    );
    return matters.stream()
        .filter(m ->
            m.getMeasure().stream().map(Measure::getProgressStatus).anyMatch(Objects::isNull)
        )
        .collect(Collectors.toList());
  }

  public List<Three> getAlertThree(boolean isSelfOnly) {
    return threeRepository.findAll((root, query, cb) ->
        query.where(
                cb.and(
                    cb.equal(root.get("integer1"), 3),
                    cb.lessThan(root.get("executeDate"), LocalDate.now()),
                    isSelfOnly
                        ? cb.equal(root.get("requestUser").get("id"), authService.getCurrentUser().getId())
                        : authService.getPrivilegePredicate(root, cb, root.get("requestUser"))
                )
            )
            .getRestriction()
    );
  }
}
