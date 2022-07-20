package com.hcit.taserver.department.user;

import java.util.Collection;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
public class UserService {

  private final UserRepository userRepository;

  public Collection<User> findAll() {
    return userRepository.findAllByIdNotOrderByUserOrderDesc(999L);
  }

  public Collection<User> findAllByDeptId(Long deptId) {
    return userRepository.findAllByDepartmentIdOrderByUserOrderDesc(deptId);
  }

  public User findById(Long id) {
    return userRepository.findById(id).orElseThrow();
  }

  public User findByName(String username) {
    return userRepository.findByName(username).orElseThrow();
  }

  public User update(Long id, User user) {
    User u = userRepository.findById(id).orElseThrow();
    if (StringUtils.isNotBlank(user.getPassword())) {
      u.setPassword(user.getPassword());
    }
    return userRepository.save(u);
  }
}
