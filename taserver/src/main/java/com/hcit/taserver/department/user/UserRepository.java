package com.hcit.taserver.department.user;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  List<User> findAllByIdNot(Long l);

  List<User> findAllByDepartmentId(Long id);

  Optional<User> findByName(String username);

  List<User> findAllByNameIn(Collection<String> names);
}
