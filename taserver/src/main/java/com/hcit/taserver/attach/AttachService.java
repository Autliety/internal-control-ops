package com.hcit.taserver.attach;

import com.hcit.taserver.department.user.AuthService;
import java.io.FileNotFoundException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@Service
public class AttachService {

  private final static Path ATT_PATH = Paths.get("fs/attach");

  private final AttachRepository attachRepository;
  private final AuthService authService;

  @SneakyThrows
  public Attach upload(MultipartFile file) {
    if (file == null || file.getOriginalFilename() == null) {
      throw new IllegalArgumentException("文件不存在或文件名为空");
    }
    String fn = file.getOriginalFilename();
    String ext = StringUtils.getFilenameExtension(fn);
    String stamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("_yyyyMMdd_HHmmss."));
    String fileName = ext == null ? fn : fn.substring(0, fn.lastIndexOf(ext) - 1) + stamp + ext;

    Attach attach = Attach.builder()
        .fileName(file.getOriginalFilename())
        .fsFileName(fileName)
        .uploadUser(authService.getCurrentUser())
        .build();

    Files.createDirectories(ATT_PATH);
    file.transferTo(ATT_PATH.resolve(fileName));
    return attachRepository.save(attach);
  }

  @SneakyThrows
  public Attach download(Long id) {
    Attach attach = attachRepository.findById(id).orElseThrow(FileNotFoundException::new);
    Path path = ATT_PATH.resolve(attach.getFsFileName());
    if (!Files.isRegularFile(path)) {
      throw new FileNotFoundException();
    }
    attach.setPath(path);
    return attach;
  }
}