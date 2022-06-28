package com.hcit.taserver.attach;

import com.hcit.taserver.department.user.User;
import java.nio.file.Path;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UpdateTimestamp;

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder

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
}
