package com.hcit.taserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.oas.annotations.EnableOpenApi;

@SpringBootApplication
@EnableOpenApi
public class TaServerApp {

  public static void main(String[] args) {

    SpringApplication.run(TaServerApp.class, args);
  }
}
