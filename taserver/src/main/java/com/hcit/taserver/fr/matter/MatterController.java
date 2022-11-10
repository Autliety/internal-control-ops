package com.hcit.taserver.fr.matter;

import com.hcit.taserver.fr.matter.form.MatterForm;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
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

  @GetMapping(params = {"current"})
  public MatterForm findByCurrent(@RequestParam boolean current) {
    if (!current) {
      throw new UnsupportedOperationException();
    }
    return matterService.findByCurrent();
  }

  @GetMapping("/{id}")
  public MatterForm getById(@PathVariable Long id, @RequestParam(required = false) Boolean withChildren) {
    return matterService.findById(id, withChildren);
  }

  @Transactional
  @PostMapping("/{id}")
  public MatterForm update(@PathVariable Long id, @RequestBody MatterForm matterForm) {
    return matterService.update(id, matterForm.getMatters());
  }

  @GetMapping("/*/matter/{id}")
  public Matter findById(@PathVariable Long id) {
    return matterService.findMatterById(id);
  }

  @GetMapping("/test")
  public void test() {
    matterService.createAnnually();
  }
}
