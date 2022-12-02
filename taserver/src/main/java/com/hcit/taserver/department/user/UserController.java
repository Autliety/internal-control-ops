package com.hcit.taserver.department.user;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {

  private final UserService userService;
  private final AuthService authService;

  private final UserRepository userRepository;

  @GetMapping
  public Collection<User> getUsers(@RequestParam(required = false) Long deptId) {
    if (deptId == null) {
      return userService.findAll().stream().filter(user -> BooleanUtils.isNotTrue(user.getIsDeleted())).collect(Collectors.toList());
    } else {
      return userService.findAllByDeptId(deptId).stream().filter(user -> BooleanUtils.isNotTrue(user.getIsDeleted())).collect(Collectors.toList());
    }
  }

  @GetMapping(params = "current=true")
  public Auth currentUser() {
    return new Auth(authService.getCurrentUser());
  }

  @PostMapping("/{id}")
  @Transactional
  public User update(@PathVariable Long id, @RequestBody User user) {
    return userService.update(id, user);
  }

  @PostMapping
  @Transactional
  public User create(@RequestBody User userCreate) {
    userCreate.setId(null);
    userRepository.save(userCreate);
    return userService.findById(userCreate.getId());
  }

  @DeleteMapping("/{id}")
  @Transactional
  public List<User> delete(@PathVariable Long id) throws Exception {
    return userService.delete(id);
  }

}
