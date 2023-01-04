package com.hcit.taserver.department.user;

import java.util.Collection;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor

@Service
@Slf4j
public class UserService {

  private final UserRepository userRepository;

  public Collection<User> findAll() {
    return userRepository.findAllByIdNotOrderByUserOrderDesc(-999L);
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
      return userRepository.save(u);
    }
    u.setDepartment(user.getDepartment());
    u.setGender(user.getGender());
    u.setName(user.getName());
    u.setPhone(user.getPhone());
    u.setStation(user.getStation());
    return userRepository.save(u);
  }

  public User create(User user) {
    user.setIsDeleted(null);
    return userRepository.save(user);
  }

  public List<User> delete(Long id) {
    User u = userRepository.findById(id).orElseThrow();
    u.setIsDeleted(true);
    userRepository.save(u);
    return userRepository.findAll().stream().filter(user -> BooleanUtils.isNotTrue(user.getIsDeleted()))
        .collect(Collectors.toList());
  }

  public Long findOneUserName(String yjms) {
    Pattern p = Pattern.compile("[\\u4e00-\\u9fa5]{2,4}");
    Matcher m = p.matcher(yjms);
    while (m.find()) {
      String name = m.group();
      User user = userRepository.findByName(name).orElse(null);
      if (user != null) {
        return user.getId();
      }
    }
    return null;

  }

}
