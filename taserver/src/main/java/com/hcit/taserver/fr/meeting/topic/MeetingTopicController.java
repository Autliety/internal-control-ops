package com.hcit.taserver.fr.meeting.topic;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/topic")
public class MeetingTopicController {

  private final MeetingTopicService meetingTopicService;

  @GetMapping("/{id}")
  public MeetingTopic getTopic(@PathVariable Long id) {
    return meetingTopicService.findById(id);
  }

  @PostMapping
  public MeetingTopic create(@RequestBody MeetingTopic topic) {
    return meetingTopicService.create(topic);
  }

  @PostMapping("/{id}")
  public MeetingTopic update(@PathVariable Long id, @RequestBody MeetingTopic topic) {
    return meetingTopicService.update(id, topic);
  }

}
