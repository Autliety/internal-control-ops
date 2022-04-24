package com.hcit.taserver.task;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskDetailRepository extends JpaRepository<TaskDetail, Integer> {

  List<TaskDetail> findAllByTaskId(Integer taskId);
}
