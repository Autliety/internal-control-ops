package com.hcit.taserver.department;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  Collection<User> findAllByDeptId(Long deptId);

}
