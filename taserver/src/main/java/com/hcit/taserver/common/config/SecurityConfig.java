package com.hcit.taserver.common.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hcit.taserver.department.user.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
@Slf4j
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  private final ObjectMapper mapper;
  private final AuthService authService;
  private final ValidateCodeFilter validateCodeFilter;
  private final WriteResponseService writeResponseService;


  @Value("${server.ssl.enabled}")
  private Boolean sslEnabled;

  @Value("${config.dev-env}")
  private Boolean devEnv;

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    if (BooleanUtils.isTrue(sslEnabled)) {
      http.requiresChannel(registry -> registry.anyRequest().requiresSecure());
    }

    http.authenticationProvider(authenticationProvider())
        .httpBasic().disable()

        .formLogin()
        .loginProcessingUrl("/api/login")
        .successHandler((request, response, authentication) ->
            writeResponseService.writeResponse(response, 200, authentication.getPrincipal()))
        .failureHandler((request, response, exception) ->
            writeResponseService.writeResponse(response, 401, mapper.createObjectNode().put("error", "登录失败")))
        .permitAll()
        .and()

        .logout()
        .logoutUrl("/api/logout")
        .logoutSuccessHandler((request, response, authentication) ->
            writeResponseService.writeResponse(response, 200, mapper.createObjectNode().put("msg", "登出成功")))
        .and()

        .exceptionHandling()
        .authenticationEntryPoint((request, response, e) ->
            writeResponseService.writeResponse(response, 401, mapper.createObjectNode().put("error", "未登录")))
        .accessDeniedHandler((request, response, e) ->
            writeResponseService.writeResponse(response, 403, mapper.createObjectNode().put("error", "未授权访问")))
        .and()

        .cors().and()
        .csrf().disable();

    if (BooleanUtils.isTrue(devEnv)) {
      http.authorizeRequests(registry -> registry.antMatchers("/api/**").permitAll());
    } else {
      http
          .authorizeRequests(registry -> registry
              .antMatchers("/api/getCode").permitAll()
              .antMatchers("/api/**").authenticated())
          .addFilterBefore(validateCodeFilter, UsernamePasswordAuthenticationFilter.class);
    }
    http.authorizeRequests(registry -> registry.anyRequest().permitAll());

  }

  @Bean
  AuthenticationProvider authenticationProvider() {
    var provider = new DaoAuthenticationProvider();
    provider.setUserDetailsService(authService);
    //noinspection deprecation
    provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
    return provider;
  }
}

