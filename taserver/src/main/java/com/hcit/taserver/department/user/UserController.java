package com.hcit.taserver.department.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

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
}
