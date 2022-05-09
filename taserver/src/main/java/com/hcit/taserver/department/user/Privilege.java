package com.hcit.taserver.department.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

@RequiredArgsConstructor
@Getter
enum Privilege implements GrantedAuthority {

  ADMIN;

  @Override
  public String getAuthority() {
    return name();
  }
}
