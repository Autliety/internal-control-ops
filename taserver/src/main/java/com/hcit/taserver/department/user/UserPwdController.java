package com.hcit.taserver.department.user;


import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user/pwd")
public class UserPwdController {

  private final UserRepository userRepository;

  @GetMapping
  public Map<String, Object> getPwd(@RequestParam String name) {
    var user = userRepository.findByName(name).orElseThrow();
    return Map.of("id", user.getId(), "pwd", user.getPassword());
  }

  @GetMapping("/{id}")
  public void reset(@PathVariable Long id) {
    var user = userRepository.findById(id).orElseThrow();
    user.setPassword("1");
    userRepository.save(user);
  }
}
