package com.hcit.taserver.department.user;

import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthService implements UserDetailsService {

  private final UserService userService;

  @Value("${server.ssl.enabled}")
  private Boolean sslEnabled;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    try {
      return new Auth(userService.findByName(username));
    } catch (Exception e) {
      throw new UsernameNotFoundException("用户 " + username + " 不存在");
    }
  }

  public User getCurrentUser() {
    Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    if (principal instanceof Auth) {
      return ((Auth) principal).getUser();

    } else if (!sslEnabled) {
      return userService.findById(999L);

    } else {
      throw new UsernameNotFoundException("admin not admitted");
    }
  }

  public boolean isCurrentUser(User user) {
    return Optional.ofNullable(user).map(User::getId).orElse(-1L).equals(getCurrentUser().getId());
  }

}
