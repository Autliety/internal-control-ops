package com.hcit.taserver.common.upload;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder

@Entity public class File {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Integer id;

  private String fileName;

  private String ip;

}