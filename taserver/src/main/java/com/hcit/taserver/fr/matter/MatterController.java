package com.hcit.taserver.fr.matter;

import io.swagger.annotations.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor

@Api(tags = "问题")
@RestController
@RequestMapping("/api/matter")
public class MatterController {

  private final MatterService matterService;
  private final MatterRepository matterRepository;

  @GetMapping
  public List<Matter> filter() {
    return matterService.findAll();
  }

  @GetMapping("/{id}")
  public Matter findById(@PathVariable Long id) {
    return matterService.findById(id);
  }

  @Deprecated
  @GetMapping("/t/upd/{id}")
  public List<Matter> upd(@PathVariable Long id) {
    var m = matterRepository.findAll();
    m.forEach(matter -> matter.setDeptId(id));
    return matterRepository.saveAll(m);
  }

  @Deprecated
  @PatchMapping("/{id}")
  public Matter update(@PathVariable Long id) {
    return matterService.update(id);
  }

  @Deprecated
  @PatchMapping("/batch/{ids}")
  public List<Matter> update(@PathVariable String ids) {
    return matterService.update(ids);
  }
}
