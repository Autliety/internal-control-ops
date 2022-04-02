package com.hcit.taserver.station;

import com.hcit.taserver.department.Department;
import com.hcit.taserver.department.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class StationService {

  private final StationRepository stationRepository;
  private final DepartmentService departmentService;

  Collection<Station> findAll() {
    Collection<Station> stations = stationRepository.findAll();
    Map<Integer, Department> map = departmentService.getDeptMap();
    stations.forEach(station -> {
      station.setDepartment(map.get(station.getDeptId()));
    });
    return stations;
  }

  Collection<Station> findAllByDeptId(Integer deptId) {
    Collection<Station> stations = stationRepository.findAllByDeptId(deptId);
    Department department = departmentService.getOne(deptId);
    stations.forEach(station -> {
      station.setDepartment(department);
    });
    return stations;
  }
}
