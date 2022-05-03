package com.hcit.taserver.fr.measure;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}