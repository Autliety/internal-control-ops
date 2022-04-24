package com.hcit.taserver.user;

import com.hcit.taserver.department.Department;
import com.hcit.taserver.department.DepartmentService;
import com.hcit.taserver.station.Station;
import com.hcit.taserver.station.StationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.function.Function;
import java.util.stream.Collectors;

@RequiredArgsConstructor

@Service
public class UserService {

  private final UserRepository userRepository;
  private final StationRepository stationRepository;
  private final UserStationRepository userStationRepository;
  private final DepartmentService departmentService;

  public Collection<User> findAll() {
    var users = userRepository.findAll();  //用户表
    var stations = stationRepository.findAll().stream().collect(Collectors.toMap(Station::getId, Function.identity()));  //岗位表
    var relationship = userStationRepository.findAll();   //用户岗位表
    users.forEach(user -> user.setStations(relationship.stream()
        .filter(r -> user.getId().equals(r.getUserId()))
        .map(UserStation::getStationId)
        .map(stations::get)
        .collect(Collectors.toList())));
    return users;
  }

  public Collection<User> findAllByDeptId(Integer deptId) {
    Collection<User> users = userRepository.findAllByDeptId(deptId);
    Department department = departmentService.getOne(deptId);
    users.forEach(user -> user.setDepartment(department));
    return users;
  }
}
