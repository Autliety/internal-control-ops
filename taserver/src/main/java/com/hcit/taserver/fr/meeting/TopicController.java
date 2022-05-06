package com.hcit.taserver.fr.meeting;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "议题")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/topic")
public class TopicController {

  private final TopicService topicService;

  @GetMapping("/{id}")
  public Topic getTopic(@PathVariable Long id) {
    return topicService.findById(id);
  }
}
