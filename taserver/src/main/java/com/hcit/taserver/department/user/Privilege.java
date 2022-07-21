package com.hcit.taserver.department.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

@RequiredArgsConstructor
@Getter public
enum Privilege implements GrantedAuthority {

  ADMIN("系统管理员"),
  DEPT("主体责任"),
  DEPT_J("监督责任"),
  DEPT_Z("职能监督责任"),
  FIRST("第一责任人责任"),
  DOUBLE("一岗双责"),
  NORMAL("")
  ;

  private final String role;

  @Override
  public String getAuthority() {
    return name();
  }
}
