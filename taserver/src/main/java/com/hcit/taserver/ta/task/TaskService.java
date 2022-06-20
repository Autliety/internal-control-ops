package com.hcit.taserver.ta.task;

import com.hcit.taserver.common.Status;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TaskService {

  private final TaskRepository taskRepository;

  public Task findById(Long id) {
    return taskRepository.findById(id).orElseThrow();
  }

  public List<Task> findAll() {
    return taskRepository.findAll();
  }

  public Task update(Task input) {
    var task = taskRepository.findById(input.getId()).orElseThrow();
    task.setProgress(input.getProgress());
    task.setRemark(input.getRemark());
    task.setValue(input.getValue());
    task.setStatus(input.getStatus());
    if (input.getStatus() == Status.AWAITING_REVIEW) {
      // todo review notify
    }
    return taskRepository.saveAndFlush(task);
  }
}
