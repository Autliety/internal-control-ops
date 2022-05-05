package com.hcit.taserver.fr.meeting;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeetingService {

  private final MeetingRepository meetingRepository;

  public List<Meeting> findAll() {
    return meetingRepository.findAll();
  }

  public Meeting findById(Long id) {
    return meetingRepository.findById(id).orElse(null);
  }

}
