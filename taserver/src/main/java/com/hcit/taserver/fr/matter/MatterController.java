package com.hcit.taserver.fr.matter;

import io.swagger.annotations.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor

@Api(tags = "问题")
@RestController
@RequestMapping("/matterform")
public class MatterController {

  private final MatterService matterService;
  private final MatterFormService matterFormService;

  @GetMapping
  public List<MatterForm> getAllForCurrentUser() {
    return matterFormService.getAllForCurrentUser();
  }

  @GetMapping("/{id}")
  public MatterForm getById(@PathVariable Long id) {
    return matterFormService.findById(id);
  }

  @GetMapping("/*/matter/{id}")
  public Matter findById(@PathVariable Long id) {
    return matterService.findById(id);
  }

  @PostMapping("{formId}/matter")
  @Transactional
  public List<Matter> create(@RequestParam(required = false) Boolean self, @RequestBody List<Matter> matters) {
    return BooleanUtils.isTrue(self) ? matterService.createAll(matters) : matterService.createAllWithoutApprove(matters);
  }

  @PostMapping("/*/matter/{id}")
  @Transactional
  public Matter update(@PathVariable Long id, @RequestBody Matter matter) {
    if (!id.equals(matter.getId())) {
      throw new IllegalArgumentException("数据键值与url不匹配");
    }
    return matterService.update(matter);
  }

  @Transactional
  @DeleteMapping("/*/matter/{id}")
  public void delete(@PathVariable Long id) {
    matterService.delete(id);
  }

}
