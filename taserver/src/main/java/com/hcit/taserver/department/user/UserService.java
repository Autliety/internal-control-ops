package com.hcit.taserver.department.user;

import com.hcit.taserver.department.StationRepository;
import java.util.Collection;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class UserService {

  private final UserRepository userRepository;
  private final StationRepository stationRepository;

  public Collection<User> findAll() {
    return userRepository.findAllByIdNot(999L);
  }

  public Collection<User> findAllByDeptId(Long deptId) {
    var stations = stationRepository.findAllByDepartmentId(deptId);
    return userRepository.findAllByStationIn(stations);
  }

  public User findById(Long id) {
    return userRepository.findById(id).orElseThrow();
  }

  public User findByName(String username) {
    return userRepository.findByName(username).orElseThrow();
  }
}
