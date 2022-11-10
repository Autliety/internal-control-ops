package com.hcit.taserver.fr.progress;

import com.hcit.taserver.approval.ApprovalService;
import com.hcit.taserver.fr.measure.Measure;
import com.hcit.taserver.fr.measure.MeasureService;
import io.swagger.annotations.Api;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "履责情况/动态跟踪")
@RequiredArgsConstructor
@RestController
@RequestMapping("/progress")
public class ProgressController {

  private final MeasureService measureService;
  private final ProgressService progressService;
  private final ApprovalService approvalService;

  @GetMapping
  public List<Progress> fetchAll() {
    return measureService.findAll().stream().map(Measure::getProgress).collect(Collectors.toList());
  }

  @GetMapping("/{id}")
  public Progress fetch(@PathVariable Long id) {
    return progressService.findById(id);
  }

  @PostMapping("/")
  @Transactional
  public Progress createProgress(@RequestBody Progress progress) {
    var measure = progress.getMeasure();
    if (progress.getMeasure() == null) {
      throw new IllegalArgumentException();
    }
    return progressService.create(measure);
  }

  @PostMapping("/{id}")
  @Transactional
  public Progress updateProgress(@PathVariable Long id, @RequestBody Progress update) {
    return progressService.update(id, update);
  }
}
