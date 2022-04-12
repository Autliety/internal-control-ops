package com.hcit.taserver.task;

import com.hcit.taserver.measure.PlanService;
import java.util.Collection;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TaskService {

  private final TaskRepository taskRepository;
  private final TaskDetailRepository taskDetailRepository;

  private final PlanService planService;

  public Task findById(Integer id) {
    return taskRepository.findById(id).map(this::bindData).orElse(null);
  }

  public List<Task> findAll() {
    return (List<Task>)bindData(taskRepository.findAll());
  }

  private Task bindData(Task input) {
    input.setPlan(planService.findById(input.getPlanId()));
    input.setDetails(taskDetailRepository.findAllByTaskId(input.getId()));
    return input;
  }

  private Collection<Task> bindData(Collection<Task> input) {
    input.forEach(this::bindData); // todo 可以优化
    return input;
  }
}
