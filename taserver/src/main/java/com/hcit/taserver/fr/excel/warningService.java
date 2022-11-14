package com.hcit.taserver.fr.excel;

import com.hcit.taserver.attach.Attach;
import com.hcit.taserver.attach.AttachRepository;
import com.hcit.taserver.department.user.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
//@Modifying
public class warningService {

  private final static Path YW_PATH = Paths.get("fs/attach");

  public final AuthService authService;
  private final AttachRepository attachRepository;
  private final YellowwarningRepository yellowwarningRepository;
  private final RedwarningRepository redwarningRepository;

  //持久化
  public List<Yellowwarning> saveAllY(List<Yellowwarning> yellowWarnings) {
    yellowwarningRepository.deleteAll();
    return yellowwarningRepository.saveAll(yellowWarnings);
  }

  public List<Redwarning> saveAllR(List<Redwarning> redwarnings) {
    redwarningRepository.deleteAll();
    return redwarningRepository.saveAll(redwarnings);
  }

  public Yellowwarning findOneYellow(Long id){
    return yellowwarningRepository.getById(id);
  }
  public Redwarning findOneRed(Long id){
    return redwarningRepository.getById(id);
  }

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

    Files.createDirectories(YW_PATH);
    file.transferTo(YW_PATH.resolve(fileName));
    return attachRepository.save(attach);
  }

  public List<Yellowwarning> findYellow() {
    return yellowwarningRepository.findAll();
  }

  public List<Redwarning> findRed() {
    return redwarningRepository.findAll();
  }


  public boolean dateStrIsValid(String dataExl) {
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
    Date date = null;
    try {
      // 转化为 Date类型测试判断
      date = dateFormat.parse(dataExl);
      dataExl.equals(dateFormat.format(date));

      return true;
    } catch (ParseException e) {
      //log.error("Illegal date string! Exception occurred: {}", e.getMessage(), e);
      return false;
    }

  }
}
