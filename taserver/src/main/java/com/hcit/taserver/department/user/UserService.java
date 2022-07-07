package com.hcit.taserver.department.user;

import java.util.Collection;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class UserService {

  private final UserRepository userRepository;

  public Collection<User> findAll() {
    return userRepository.findAllByIdNot(999L);
  }

  public Collection<User> findAllByDeptId(Long deptId) {
    return userRepository.findAllByDepartmentId(deptId);
  }

  public User findById(Long id) {
    return userRepository.findById(id).orElseThrow();
  }

  public User findByName(String username) {
    return userRepository.findByName(username).orElseThrow();
  }
}
