package com.hcit.taserver.fr.inform;

import io.swagger.annotations.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "告知")

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/inform")
public class InformController {

  private final InformService informService;

  @GetMapping
  public List<Inform> fetchAll() {
    return informService.findAll();
  }

  @GetMapping("/{id}")
  public Inform fetch(@PathVariable Long id) {
    return informService.findById(id);
  }

  @PostMapping
  public Inform create(@RequestBody Inform inform) {
    return informService.create(inform);
  }
}
