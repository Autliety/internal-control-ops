package com.hcit.taserver.department.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Collection;
import java.util.List;
import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Getter
@Setter
@RequiredArgsConstructor
class Auth implements UserDetails {

  @NonNull
  private final User user;

  @Override
  @JsonIgnore
  public Collection<? extends GrantedAuthority> getAuthorities() {
    var v = user.getPrivilege();
    if (v == null) {
      return List.of(Privilege.NORMAL);
    } else {
      return List.of(user.getPrivilege());
    }
  }

  @Override
  @JsonIgnore
  public String getPassword() {
    String s = user.getPassword();
    if (StringUtils.isBlank(s)) {
      return "1";
    }
    return user.getPassword();
  }

  @Override
  @JsonIgnore
  public String getUsername() {
    return user.getName();
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return !getAuthorities().isEmpty();
  }

}
