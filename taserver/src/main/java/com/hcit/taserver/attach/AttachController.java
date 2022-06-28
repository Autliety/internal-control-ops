package com.hcit.taserver.attach;

import java.io.IOException;
import java.nio.file.Files;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


@RequiredArgsConstructor
@RestController
@RequestMapping("/attach")
public class AttachController {

  public final AttachService attachService;

  @PostMapping
  public Attach upload(@RequestParam("file") MultipartFile file) {
    return attachService.upload(file);
  }

  @GetMapping("/{id}") /*下载文件*/
  public ResponseEntity<Resource> download(@PathVariable("id") Long id) throws IOException {
    Attach attach = attachService.download(id);
    return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + attach.getFileName() + "\"")
        .body(new ByteArrayResource(Files.readAllBytes(attach.getPath())));
  }

}
