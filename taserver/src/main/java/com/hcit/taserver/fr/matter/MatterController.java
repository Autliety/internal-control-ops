package com.hcit.taserver.fr.matter;

import io.swagger.annotations.Api;
import java.util.List;
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

  @Transactional
  @PostMapping("/{id}")
  public MatterForm update(@PathVariable Long id, @RequestBody MatterForm matterForm) {
    return matterFormService.update(id, matterForm.getMatters());
  }

  @PostMapping
  public MatterForm create(@RequestParam(required = false) Boolean isDept, @RequestBody MatterForm input) {
    if (isDept == null) {
      isDept = false;
    }
    return matterFormService.create(isDept, input);
  }

}
