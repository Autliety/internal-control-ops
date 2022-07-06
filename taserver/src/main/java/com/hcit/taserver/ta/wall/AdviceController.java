package com.hcit.taserver.ta.wall;

import org.springframework.web.bind.annotation.RequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/advice")
public class AdviceController {
  private final AdviceService adviceService;

  @PostMapping
  public Advice create(@RequestBody Advice advice) {
    return adviceService.create(advice);
  }

  @GetMapping
  public List<Advice> findAll(){
    return adviceService.findAll();
  }

}
