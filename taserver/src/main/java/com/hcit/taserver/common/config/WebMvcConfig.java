package com.hcit.taserver.common.config;

import org.apache.commons.lang3.BooleanUtils;
import org.apache.tomcat.util.http.Rfc6265CookieProcessor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.embedded.tomcat.TomcatContextCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

  @Value("${server.ssl.enabled}")
  private Boolean sslEnabled;
  @Value("${config.dev-env}")
  private Boolean devEnv;

  @Override
  public void configurePathMatch(PathMatchConfigurer configurer) {
    configurer.addPathPrefix("/api", c -> c.isAnnotationPresent(RestController.class));
  }

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    if (BooleanUtils.isNotTrue(devEnv)) {
      registry.addViewController("/{spring:[\\w-]+}")
          .setViewName("forward:/");
      registry.addViewController("/**/{spring:[\\w-]+}")
          .setViewName("forward:/");
      registry.addViewController("/{spring:[\\w-]+}/**{spring:?!(\\.js|\\.css)$}")
          .setViewName("forward:/");
    }
  }

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
        .allowedOrigins("http://localhost:3000")
        .allowCredentials(true)
        .allowedMethods("GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS")
        .allowedHeaders("*")
        .exposedHeaders("*");
  }

  @Bean
  public TomcatContextCustomizer sameSiteCustomizer() {
    return context -> {
      var cp = new Rfc6265CookieProcessor();
      if (sslEnabled) {
        cp.setSameSiteCookies("None");
      }
      context.setCookieProcessor(cp);
    };
  }
}
