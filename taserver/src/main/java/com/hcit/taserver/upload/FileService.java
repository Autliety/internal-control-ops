package com.hcit.taserver.upload;

import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.junit.runner.Request;
import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RequiredArgsConstructor
@Service
public class FileService {
  private final Repository repository;
  private final static Path paths = Paths.get("static/path");

  public File upload(MultipartFile file, ServerProperties servlet) {
    if (file == null || file.getOriginalFilename() == null) {
      throw new IllegalArgumentException("文件或文件名不存在");
    }
    String fileName = file.getOriginalFilename();
    String ip = servlet.getHttp2().toString();
    var fil = File.builder().fileName(fileName).ip(ip).build();
    try {
      Files.createDirectories(paths);
    } catch (IOException e) {
      e.printStackTrace();
    }
    try {
      file.transferTo(paths.resolve(fileName));
    } catch (IOException e) {
      e.printStackTrace();
    }
    return repository.save(fil);
  }

  @SneakyThrows
  public Resource download(String filename){
    Path file = this.paths.resolve(filename);
    UrlResource urlResource = new UrlResource(file.toUri());
    return urlResource;
  }
}
