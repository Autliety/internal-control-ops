package com.hcit.taserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class TaServerApp {

  public static void main(String[] args) {

    SpringApplication.run(TaServerApp.class, args);
  }
}
