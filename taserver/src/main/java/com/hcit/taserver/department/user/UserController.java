package com.hcit.taserver.department.user;

import java.util.Collection;
import java.util.List;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

  @ApiOperation("创建人员")
  @PostMapping
  public User create(@RequestBody User userCreate) {
    userCreate.setId(null);
    userRepository.save(userCreate);
    return userService.findById(userCreate.getId());
  }

  @ApiOperation("删除人员")
  @DeleteMapping("/{id}")
  public List<User> delete(@PathVariable Long id) throws Exception {
    return userService.delete(id);
  }

}
