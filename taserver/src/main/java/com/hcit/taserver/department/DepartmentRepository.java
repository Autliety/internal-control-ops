package com.hcit.taserver.department;

import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {

  List<Department> findAllByIdNotOrderByDeptOrder(Long id);

  List<Department> findAllByNameInOrShortNameIn(Collection<String> names, Collection<String> shortNames);
}
