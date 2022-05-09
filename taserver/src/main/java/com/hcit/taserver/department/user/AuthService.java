package com.hcit.taserver.department.user;

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

  private final UserRepository userRepository;

  @Value("${server.ssl.enabled}")
  private Boolean sslEnabled;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    return userRepository.findByName(username)
        .map(Auth::new)
        .orElseThrow(() -> new UsernameNotFoundException("用户 " + username + " 不存在"));
  }

  public User getCurrentUser() {
    Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    if (principal instanceof Auth) {
      return ((Auth) principal).getUser();

    } else if (!sslEnabled) {
      return userRepository.findById(999L).orElseThrow();

    } else {
      throw new UsernameNotFoundException("admin not admitted");
    }
  }

}
