package com.hcit.taserver.fr.motion;

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


@Api(tags = "纪委动议")
@RequiredArgsConstructor
@RestController
@RequestMapping("/motion")
public class MotionController {

  private final MotionService motionService;

  @GetMapping
  public List<Motion> fetchAll() {
    return motionService.findAll();
  }

  @GetMapping("/{id}")
  public Motion fetchById(@PathVariable Long id) {
    return motionService.findById(id);
  }

  @PostMapping
  @Transactional
  public Motion createMeeting(@RequestBody Motion motion) {
    return motionService.create(motion);
  }

  @PostMapping("/{id}")
  @Transactional
  public Motion updateMeeting(@PathVariable Long id, @RequestBody Motion motion) {
    return motionService.update(id, motion);
  }

}

