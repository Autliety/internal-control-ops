package com.hcit.taserver.ta.task;

import com.hcit.taserver.ta.plan.PlanDetail;
import com.hcit.taserver.ta.plan.PlanService;
import java.util.Collection;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
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
    return (List<Task>) bindData(taskRepository.findAll());
  }

  private Task bindData(Task input) {
    var plan = planService.findById(input.getPlanId());
    var planDetailsMap = plan.getDetails().stream().collect(Collectors.toMap(
        PlanDetail::getId, Function.identity()));
    var details = taskDetailRepository.findAllByTaskId(input.getId());
    details.forEach(d -> d.setPlanDetail(planDetailsMap.get(d.getPlanDetailId())));

    input.setPlan(plan);
    input.setDetails(details);
    return input;
  }

  private Collection<Task> bindData(Collection<Task> input) {
    input.forEach(this::bindData); // todo 可以优化
    return input;
  }
}