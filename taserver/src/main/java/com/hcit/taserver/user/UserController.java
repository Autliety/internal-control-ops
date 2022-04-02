package com.hcit.taserver.user;

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

  @GetMapping
  public Collection<User> getUsers(@RequestParam(required = false) Integer deptId) {
    if (deptId == null) {
      return userService.findAll();
    } else {
      return userService.findAllByDeptId(deptId);
    }
  }
}
