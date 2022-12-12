package com.hcit.taserver.department.user;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

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
    return userRepository.findAll().stream().filter(user -> BooleanUtils.isNotTrue(user.getIsDeleted())).collect(Collectors.toList());
  }


  public Long findOneUserName(String Yjms) {
    List<String> userName = new ArrayList<>();
    List<String> departmentName = new ArrayList<>();
    Long id = null;

    List<User> user1 = userRepository.findNameByPrivilege(Privilege.FIRST);
    List<User> user2 = userRepository.findNameByPrivilege(Privilege.DOUBLE);
    List<User> user3 = userRepository.findNameByPrivilege(null);
    List<User> user4 = userRepository.findNameByPrivilege(Privilege.NORMAL);
    user1.addAll(user2);
    user1.addAll(user3);
    user1.addAll(user4);

    List<User> dept1 = userRepository.findNameByPrivilege(Privilege.DEPT);
    List<User> dept2 = userRepository.findNameByPrivilege(Privilege.DEPT_J);
    List<User> dept3 = userRepository.findNameByPrivilege(Privilege.DEPT_Z);
    dept1.addAll(dept2);
    dept1.addAll(dept3);

    /// TODO: 2022/12/8
//    Set<String> stringSet = new HashSet<>();  //FirstName
//    stringSet.add(user.getName().substring(0, 1));
    for (User user : user1) {
      userName.add(user.getName());     //所有用户名
    }
    for (User dept : dept1) {
      departmentName.add(dept.getName());
    }

    for (String oneDepartmentName : departmentName) {
      if (Yjms.indexOf(oneDepartmentName) == 0) {
        int i = oneDepartmentName.length();
        String result = Yjms.substring(i);
        for (String name : userName) {
          if (result.indexOf(name) == 0) {
            User user = userRepository.findByName(name).orElseThrow();
            if (user.getId() != null) {
              id = user.getId();
            }
          }
        }
      }
    }
    return id;
  }

}
