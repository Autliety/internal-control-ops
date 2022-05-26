package com.hcit.taserver.fr.matter;

import io.swagger.annotations.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor

@Api(tags = "问题")
@RestController
@RequestMapping("/api/matter")
public class MatterController {

  private final MatterService matterService;

  @GetMapping
  public List<Matter> filter() {
    return matterService.findAll();
  }

  @GetMapping("/{id}")
  public Matter findById(@PathVariable Long id) {
    return matterService.findById(id);
  }

  @PostMapping
  public List<Matter> update(@RequestBody List<Matter> matters) {
    return matterService.updateAll(matters);
  }

}
