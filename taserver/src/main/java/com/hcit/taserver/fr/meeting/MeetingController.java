package com.hcit.taserver.fr.meeting;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/meeting")
public class MeetingController {

  private final MeetingService meetingService;

  @GetMapping
  public List<Meeting> fetchAll() {
    return meetingService.findAll();
  }

  @GetMapping("/{id}")
  public Meeting fetchById(@PathVariable Long id) {
    return meetingService.findById(id);
  }

  @PostMapping
  @Transactional
  public Meeting createMeeting(@RequestBody Meeting meeting) {
    return meetingService.create(meeting);
  }

  @PostMapping("/{id}")
  @Transactional
  public Meeting updateMeeting(@PathVariable Long id, @RequestBody Meeting meeting) {
    return meetingService.update(id, meeting);
  }

}
