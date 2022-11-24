package com.hcit.taserver.department.user;

import java.util.List;
import java.util.Optional;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthService implements UserDetailsService {

  @Value("${config.dev-env}")
  private Boolean envDev;
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

    } else if (BooleanUtils.isTrue(envDev)) {
      return userService.findById(-999L);

    } else {
      throw new UsernameNotFoundException("login not admitted");
    }
  }

  public boolean isCurrentUser(User user) {
    return Optional.ofNullable(user).map(User::getId).orElse(-1L).equals(getCurrentUser().getId());
  }

  public Predicate getPrivilegePredicate(Root<?> root, CriteriaBuilder cb) {
    return getPrivilegePredicate(root, cb, null, null);
  }

  public Predicate getPrivilegePredicate(Root<?> root, CriteriaBuilder cb, User targetUser) {
    return getPrivilegePredicate(root, cb, null, targetUser);
  }

  public Predicate getPrivilegePredicate(Root<?> root, CriteriaBuilder cb, Path<?> userPath) {
    return getPrivilegePredicate(root, cb, userPath, null);
  }

  public Predicate getPrivilegePredicate(Root<?> root, CriteriaBuilder cb, Path<?> userPath, User targetUser) {
    if (userPath == null) {
      userPath = root.get("user");
    }
    User u = targetUser != null ? targetUser : getCurrentUser();
    Predicate predicate;
    if (List.of(1L, 28L, 29L, -999L).contains(u.getId())) {
      predicate = cb.conjunction();
    } else {
      switch (u.getPrivilege()) {
        case DEPT:
        case ADMIN:
        case FIRST:
          predicate = cb.equal(userPath.get("department").get("id"), u.getDepartment().getId());
          break;
        case DEPT_J:
        case DEPT_Z:
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
    }
    return predicate;
  }

}
