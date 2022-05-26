package com.hcit.taserver.fr.measure;

import io.swagger.annotations.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "措施")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/measure")
public class MeasureController {

  private final MeasureService measureService;

  @GetMapping
  public List<Measure> filter() {
    return measureService.findAll();
  }

  @GetMapping("/{id}")
  public Measure findById(@PathVariable Long id) {
    return measureService.findById(id);
  }

  @PostMapping
  @Transactional
  public List<Measure> create(@RequestBody List<Measure> measures) {
    return measureService.create(measures);
  }

}
