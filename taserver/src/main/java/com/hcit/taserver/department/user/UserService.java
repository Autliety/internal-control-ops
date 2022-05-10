package com.hcit.taserver.department.user;

import com.hcit.taserver.common.BasicPersistableService;
import com.hcit.taserver.department.Station;
import com.hcit.taserver.department.StationRepository;
import com.hcit.taserver.department.StationService;
import java.util.Collection;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class UserService implements BasicPersistableService<User> {

  private final UserRepository userRepository;
  private final StationRepository stationRepository;
  private final StationService stationService;

  public Collection<User> findAll() {
    return bindData(userRepository.findAllByIdNot(999L));
  }

  public Collection<User> findAllByDeptId(Long deptId) {
    var stations = stationRepository.findAllByDeptId(deptId);
    return bindData(
        userRepository.findAllByStationIdIn(stations.stream().map(Station::getId).collect(Collectors.toList())));
  }

  public User findById(Long id) {
    return bindData(userRepository.findById(id).orElseThrow());
  }

  @Override
  public User bindData(User entity) {
    entity.setStation(stationService.findById(entity.getStationId()));
    return entity;
  }

  public User findByName(String username) {
    return bindData(userRepository.findByName(username).orElseThrow());
  }
}
