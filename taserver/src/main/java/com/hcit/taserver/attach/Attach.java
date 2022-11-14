package com.hcit.taserver.attach;

import com.hcit.taserver.department.user.User;
import lombok.*;
import org.hibernate.annotations.Proxy;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.nio.file.Path;
import java.time.LocalDateTime;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

@Proxy(lazy = false)
@Entity
public class Attach {

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String fsFileName;

  private String fileName;

  @ManyToOne
  private User uploadUser;

  @UpdateTimestamp
  private LocalDateTime updateTime;

  @Transient
  private Path path;

  private Boolean isTemplate;
}
