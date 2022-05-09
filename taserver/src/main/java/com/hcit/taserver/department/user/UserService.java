package com.hcit.taserver.department.user;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.department.Station;
import com.hcit.taserver.department.StationRepository;
import java.util.Collection;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class UserService implements BasicPersistableService<User> {

  private final UserRepository userRepository;
  private final StationRepository stationRepository;

  public Collection<User> findAll() {
    return bindData(userRepository.findAllByIdNot(999L));
  }

  public Collection<User> findAllByDeptId(Long deptId) {
    var stations = stationRepository.findAllByDeptId(deptId);
    return bindData(
        userRepository.findAllByStationIdIn(stations.stream().map(Station::getId).collect(Collectors.toList())));
  }

  @Override
  public User bindData(User entity) {
    entity.setStation(stationRepository.findById(entity.getStationId()).orElseThrow());
    return entity;
  }
}
