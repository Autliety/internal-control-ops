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
  private final UserStationRepository userStationRepository;
  private final DepartmentRepository departmentRepository;

  public Collection<User> findAll() {
    return bindData(userRepository.findAll());
  }

  public Collection<User> findAllByDeptId(Long deptId) {
    return bindData(userRepository.findAllByDeptId(deptId));
  }

  public List<User> findAllById(Collection<Long> ids) {
    return bindData(userRepository.findAllById(ids));
  }

  @Override
  public User bindData(User entity) {
    entity.setDepartment(departmentRepository.findById(entity.getDeptId()).orElseThrow());
    entity.setStations(stationRepository.findAllById(
        userStationRepository.findAllByUserId(entity.getId())
            .stream()
            .map(UserStation::getStationId)
            .collect(Collectors.toSet())));
    return entity;
  }
   // todo optimize bulk bind
}
