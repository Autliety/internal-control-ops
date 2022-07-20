package com.hcit.taserver.department.user;

import java.util.Collection;
import lombok.RequiredArgsConstructor;
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

  @GetMapping
  public Collection<User> getUsers(@RequestParam(required = false) Long deptId) {
    if (deptId == null) {
      return userService.findAll();
    } else {
      return userService.findAllByDeptId(deptId);
    }
  }

  @GetMapping(params = "current=true")
  public Auth currentUser() {
    return new Auth(authService.getCurrentUser());
  }

  @PostMapping("/{id}")
  public User update(@PathVariable Long id, @RequestBody User user) {
    if (id.equals(authService.getCurrentUser().getId())) {
      return userService.update(id, user);
    } else {
      throw new IllegalArgumentException("非当前用户");
    }
  }
}
