package com.hcit.taserver.department;

import static com.hcit.taserver.common.BasicPersistableService.ToMap;

import com.hcit.taserver.common.BasicPersistableService;
import java.util.Collection;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StationService implements BasicPersistableService<Station> {

  private final StationRepository stationRepository;
  private final DepartmentRepository departmentRepository;

  Collection<Station> findAll() {
    Collection<Station> stations = stationRepository.findAll();
    Map<Long, Department> map = ToMap(departmentRepository.findAll());
    stations.forEach(station ->
      station.setDepartment(map.get(station.getDeptId()))
    );
    return stations;
  }

  Collection<Station> findAllByDeptId(Long deptId) {
    Collection<Station> stations = stationRepository.findAllByDeptId(deptId);
    Department department = departmentRepository.findById(deptId).orElseThrow();
    stations.forEach(station -> station.setDepartment(department));
    return stations;
  }

  public Station findById(Long id) {
    return bindData(stationRepository.findById(id).orElseThrow());
  }

  @Override
  public Station bindData(Station entity) {
    entity.setDepartment(departmentRepository.findById(entity.getDeptId()).orElseThrow());
    return entity;
  }
}
