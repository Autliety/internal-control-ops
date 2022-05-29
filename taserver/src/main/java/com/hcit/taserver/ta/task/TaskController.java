package com.hcit.taserver.ta.task;

import java.util.Collection;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor

@RestController
@RequestMapping("/task")
public class TaskController {

  private final TaskService taskService;

  @GetMapping
  public Collection<Task> fetchAll() {
    return taskService.findAll();
  }

  @GetMapping("/{id}")
  public Task fetch(@PathVariable Integer id) {
    return taskService.findById(id);
  }
}
