package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.common.BasicPersistableService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MeetingService implements BasicPersistableService<Meeting> {

  private final MeetingRepository meetingRepository;

  public List<Meeting> findAll() {
    return meetingRepository.findAll();
  }

  public Meeting findById(Long id) {
    return meetingRepository.findById(id).orElse(null);
  }

  public Meeting save(Meeting meeting) {
    // todo generate code
    return meetingRepository.save(meeting);
  }

  // todo bindData
}
