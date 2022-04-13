package com.hcit.taserver.task;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {

  @Query("select t from Task t join Plan p on t.planId = p.id where p.id = ?1")
  List<Task> findAllByDeptId(Integer deptId);

}
