package com.hcit.taserver.fr.three;

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


@Api(tags = "三重一大")
@RequiredArgsConstructor
@RestController
@RequestMapping("/three")
public class ThreeController {

  private final ThreeService threeService;

  @GetMapping
  public List<Three> fetchAll() {
    return threeService.findAll();
  }

  @GetMapping("/{id}")
  public Three fetchById(@PathVariable Long id) {
    return threeService.findById(id);
  }

  @PostMapping
  @Transactional
  public Three createMeeting(@RequestBody Three three) {
    return threeService.create(three);
  }

  @PostMapping("/{id}")
  @Transactional
  public Three updateMeeting(@PathVariable Long id, @RequestBody Three three) {
    return threeService.update(id, three);
  }

}

