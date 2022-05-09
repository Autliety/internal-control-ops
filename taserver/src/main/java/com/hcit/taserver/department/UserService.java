package com.hcit.taserver.department;

import com.hcit.taserver.common.BasicPersistableService;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class UserService implements BasicPersistableService<User> {

  private final UserRepository userRepository;
  private final StationRepository stationRepository;

  public Collection<User> findAll() {
    return bindData(userRepository.findAll());
  }

  public Collection<User> findAllByDeptId(Long deptId) {
    var stations = stationRepository.findAllByDeptId(deptId);
    return bindData(
        userRepository.findAllByStationIdIn(stations.stream().map(Station::getId).collect(Collectors.toList())));
  }

  public List<User> findAllById(Collection<Long> ids) {
    return bindData(userRepository.findAllById(ids));
  }

  @Override
  public User bindData(User entity) {
    entity.setStation(stationRepository.findById(entity.getStationId()).orElseThrow());
    return entity;
  }
   // todo optimize bulk bind
}
