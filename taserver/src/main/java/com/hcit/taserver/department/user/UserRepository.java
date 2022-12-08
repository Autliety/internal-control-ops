package com.hcit.taserver.department.user;

import com.hcit.taserver.department.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  List<User> findAllByIdNotOrderByUserOrderDesc(Long l);

  List<User> findAllByDepartmentIdOrderByUserOrderDesc(Long id);

  Optional<User> findByName(String username);

  List<User> findAllByNameIn(Collection<String> names);

  Optional<User> findByDepartmentAndPrivilege(Department department, Privilege privilege);

  List<User> findNameByPrivilege(Privilege privilege);


}
