package com.hcit.taserver.fr.meeting;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicTaskRepository extends JpaRepository<TopicTask, Long> {
}
