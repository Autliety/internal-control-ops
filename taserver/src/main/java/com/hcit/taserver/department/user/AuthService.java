package com.hcit.taserver.department.user;

import java.util.List;
import java.util.Optional;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthService implements UserDetailsService {

  private final UserService userService;

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

    } else {
      throw new UsernameNotFoundException("admin not admitted");
    }
  }

  public boolean isCurrentUser(User user) {
    return Optional.ofNullable(user).map(User::getId).orElse(-1L).equals(getCurrentUser().getId());
  }

  public Predicate getPrivilegePredicate(Root<?> root, CriteriaBuilder cb) {
    return getPrivilegePredicate(root, cb, null, null);
  }

  public Predicate getPrivilegePredicate(Root<?> root, CriteriaBuilder cb, Predicate or, Path<?> userPath) {
    if (or == null) {
      or = cb.disjunction();
    }
    if (userPath == null) {
      userPath = root.get("user");
    }
    User u = getCurrentUser();
    Predicate predicate;
    switch (u.getPrivilege()) {
      case DEPT:
      case DEPT_J:
      case DEPT_Z:
      case ADMIN:
        if (List.of(1L, 28L, 29L, 999L).contains(u.getId())) {
          predicate = cb.conjunction();
        } else {
          predicate = cb.equal(userPath.get("department").get("id"), u.getDepartment().getId());
        }
        break;
      case FIRST:
        predicate = cb.equal(userPath.get("department").get("id"), u.getDepartment().getId());
        break;
      case DOUBLE:
        predicate = cb.or(
            cb.equal(userPath.get("id"), u.getId()),
            cb.equal(userPath.get("parent").get("id"), u.getId()), // 主要分管
            userPath.get("department").get("id").in() // todo 分管站办
        );
        break;
      default:
        predicate = cb.equal(userPath.get("id"), u.getId());
    }
    return cb.or(predicate, or);
  }

}
