package com.hcit.taserver.common.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Slf4j
@RequiredArgsConstructor
public class ValidateCodeFilter extends OncePerRequestFilter {

  private final ObjectMapper mapper;
  private final WriteResponseService writeResponseService;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    String requestUrl = request.getRequestURI();

    if ("/api/login".equals(requestUrl)) {
      String codeSys = request.getSession().getAttribute("captcha").toString();
      String codeUser = request.getParameter("code");

      //用户输入了验证码
      if (codeUser != null) {
        if (codeUser.equalsIgnoreCase(codeSys)) {
          filterChain.doFilter(request, response);
        } else {
          //验证码不正确
          writeResponseService.writeResponse(response, 401, mapper.createObjectNode().put("error", "验证失败"));
        }
      } else {
        //用户未输入验证码
        writeResponseService.writeResponse(response, 401, mapper.createObjectNode().put("error", "验证码为空"));
      }
    } else {
      filterChain.doFilter(request, response);
    }
  }
}
