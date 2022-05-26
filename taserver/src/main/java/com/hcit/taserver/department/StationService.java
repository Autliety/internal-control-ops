package com.hcit.taserver.department;

import java.util.Collection;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StationService {

  private final StationRepository stationRepository;

  Collection<Station> findAll() {
    return stationRepository.findAll();
  }

  Collection<Station> findAllByDeptId(Long deptId) {
    return stationRepository.findAllByDepartmentId(deptId);
  }

  public Station findById(Long id) {
    return stationRepository.findById(id).orElseThrow();
  }

}
