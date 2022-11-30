package com.hcit.taserver.fr.matter;

import com.hcit.taserver.fr.matter.form.MatterForm;
import com.hcit.taserver.fr.matter.form.MatterFormService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
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

  private final MatterFormService matterFormService;
  private final MatterService matterService;

  @GetMapping(params = {"current"})
  public MatterForm findByCurrent(@RequestParam boolean current) {
    if (!current) {
      throw new UnsupportedOperationException();
    }
    return matterFormService.findByCurrent();
  }

  @GetMapping("/{id}")
  public MatterForm getById(@PathVariable Long id, @RequestParam(required = false) Boolean withChildren) {
    if (withChildren == null) {
      withChildren = true;
    }
    return matterFormService.findById(id, withChildren);
  }

  @Transactional
  @PostMapping
  public MatterForm create() {
    return matterFormService.create(null);
  }

  @Transactional
  @PostMapping("/{id}")
  public MatterForm update(@PathVariable Long id, @RequestBody MatterForm matterForm) {
    return matterFormService.update(id, matterForm.getMatters());
  }

  @GetMapping("/*/matter/{id}")
  public Matter findById(@PathVariable Long id) {
    return matterService.findById(id);
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
