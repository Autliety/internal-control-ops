package com.hcit.taserver.fr.meeting;

import io.swagger.annotations.Api;
import java.util.Collection;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "议题")
@RequiredArgsConstructor
@RestController
@RequestMapping("/topic")
public class TopicController {

  private final TopicService topicService;
  private final TopicTaskRepository topicTaskRepository;

  @GetMapping("/{id}")
  public Topic getTopic(@PathVariable Long id) {
    return topicService.findById(id);
  }

  @PostMapping
  public Topic create(@RequestBody Topic topic) {
    return topicService.create(topic);
  }

  @PostMapping("/task")
  @Transactional
  public Collection<TopicTask> updateTasks(@RequestBody List<TopicTask> tasks) {
    return topicTaskRepository.saveAll(tasks);
  }

}
