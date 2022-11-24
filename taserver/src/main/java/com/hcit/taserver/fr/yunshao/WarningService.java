package com.hcit.taserver.fr.yunshao;

import com.hcit.taserver.department.user.AuthService;
import com.hcit.taserver.fr.yunshao.red.Redwarning;
import com.hcit.taserver.fr.yunshao.red.RedwarningRepository;
import com.hcit.taserver.fr.yunshao.yellow.Yellowwarning;
import com.hcit.taserver.fr.yunshao.yellow.YellowwarningRepository;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
//@Modifying
public class WarningService {


  public final AuthService authService;
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

  public List<Yellowwarning> findYellow() {
    return yellowwarningRepository.findAll();
  }

  public List<Redwarning> findRed() {
    return redwarningRepository.findAll();
  }


  public boolean dateStrIsValid(String dataExl) {
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
    try {
      // 转化为 Date类型测试判断
      dateFormat.parse(dataExl);
      return true;
    } catch (ParseException e) {
      log.debug("Illegal date format exception occurred: {}", e.getMessage());
      return false;
    }

  }
}
