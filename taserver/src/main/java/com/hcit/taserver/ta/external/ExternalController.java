package com.hcit.taserver.ta.external;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/external")
public class ExternalController {

  private final ExternalService externalService;

  @GetMapping
  public List<External> fetchAll() {
    return externalService.findAll();
  }

  @GetMapping("/{id}")
  public External fetch(@PathVariable Long id) {
    return externalService.findById(id);
  }

  @PostMapping
  public External create(@RequestBody External external) {
    return externalService.create(external);
  }

  @PostMapping("/usage")
  public ExternalUsage createUsage(@RequestBody ExternalUsage usage) {
    usage.setId(null);
    return externalService.save(usage);
  }

}
