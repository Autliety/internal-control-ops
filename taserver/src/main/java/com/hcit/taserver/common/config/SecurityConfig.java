package com.hcit.taserver.common.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hcit.taserver.department.user.AuthService;
import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  private final ObjectMapper mapper;
  private final AuthService authService;

  @Value("${server.ssl.enabled}")
  private Boolean sslEnabled;

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    if (sslEnabled) {
      http.requiresChannel(registry -> registry.anyRequest().requiresSecure())
          .authorizeRequests(registry -> registry.antMatchers("/api/**").authenticated());
    } else {
      http.authorizeRequests(registry -> registry.antMatchers("/api/**").permitAll());
    }

    http.authenticationProvider(authenticationProvider())
        .httpBasic().disable()
        .authorizeRequests(registry -> registry.anyRequest().permitAll())

        .formLogin()
          .loginProcessingUrl("/api/login")
          .successHandler((request, response, authentication) ->
              writeResponse(response, 200, authentication.getPrincipal()))
          .failureHandler((request, response, exception) ->
              writeResponse(response, 401, mapper.createObjectNode().put("error", "登录失败")))
          .permitAll()
        .and()

        .logout()
          .logoutUrl("/api/logout")
          .logoutSuccessHandler((request, response, authentication) ->
              writeResponse(response, 200, mapper.createObjectNode().put("msg", "登出成功")))
        .and()

        .exceptionHandling()
          .authenticationEntryPoint((request, response, e) ->
              writeResponse(response, 401, mapper.createObjectNode().put("error", "未登录")))
          .accessDeniedHandler((request, response, e) ->
              writeResponse(response, 403, mapper.createObjectNode().put("error", "未授权访问")))
        .and()

        .cors().and()
        .csrf().disable();

  }

  @Bean AuthenticationProvider authenticationProvider() {
    var provider = new DaoAuthenticationProvider();
    provider.setUserDetailsService(authService);
    //noinspection deprecation
    provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
    return provider;
  }

  private void writeResponse(HttpServletResponse response, int statusCode, Object payload) throws IOException {
    response.setContentType("application/json;charset=utf-8");
    response.setStatus(statusCode);
    mapper.writeValue(response.getOutputStream(), payload);
  }

}
