package com.hcit.taserver.common.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Service
@RequiredArgsConstructor
public class WriteResponseService {

  private final ObjectMapper mapper;

  public void writeResponse(HttpServletResponse response, int statusCode, Object payload) throws IOException {
    response.setContentType("application/json;charset=utf-8");
    response.setStatus(statusCode);
    mapper.writeValue(response.getOutputStream(), payload);
  }
}
