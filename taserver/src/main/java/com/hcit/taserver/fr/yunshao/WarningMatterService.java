package com.hcit.taserver.fr.yunshao;

import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.fr.matter.Matter;
import com.hcit.taserver.fr.matter.form.MatterFormService;
import com.hcit.taserver.fr.yunshao.yellow.YellowMatter;
import com.hcit.taserver.fr.yunshao.yellow.YellowMatterRepository;
import com.hcit.taserver.fr.yunshao.yellow.YellowwarningRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

@RequiredArgsConstructor
@Service
public class WarningMatterService {

  private final MatterFormService matterFormService;
  private final YellowwarningRepository yellowwarningRepository;
  private final YellowMatterRepository yellowMatterRepository;
  private final AuthService authService;

  public YellowMatter create(YellowMatter input) {
    if (input.getYellowwarning() == null || input.getYellowwarning().getId() == null || input.getUser() == null) {
      throw new IllegalArgumentException();
    }
    var yw = yellowwarningRepository.findById(input.getYellowwarning().getId()).orElseThrow();
    var matters = matterFormService.insertMatters(input.getUser(), List.of(Matter.builder()
        .origin("云哨黄哨")
        .content(yw.getYjms())
        .endDate(input.getEndDate())
        .build()));

    input.setId(null);
    input.setMatter(null);
    input.setMatter(CollectionUtils.firstElement(matters));
    return yellowMatterRepository.save(input);
  }

  public List<YellowMatter> findAll() {
    return yellowMatterRepository.findAll();
  }

  public List<YellowMatter> findByCurrent() {
    return yellowMatterRepository.findAllByUserId(authService.getCurrentUser().getId());
  }

  public YellowMatter findByWarningId(Long id) {
    return yellowMatterRepository.findByYellowwarningId(id);
  }
}
