package com.hcit.taserver.fr.meeting.topic;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeetingTopicRepository extends JpaRepository<MeetingTopic, Long> {

}
