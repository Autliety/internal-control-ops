package com.hcit.taserver.fr.meeting;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Long> {

  List<Topic> findAllByMeetingId(Long id);
}