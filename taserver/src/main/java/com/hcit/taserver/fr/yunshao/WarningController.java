package com.hcit.taserver.fr.yunshao;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.read.listener.PageReadListener;
import com.hcit.taserver.attach.Attach;
import com.hcit.taserver.attach.AttachService;
import com.hcit.taserver.fr.yunshao.red.Redwarning;
import com.hcit.taserver.fr.yunshao.yellow.YellowMatter;
import com.hcit.taserver.fr.yunshao.yellow.Yellowwarning;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/warning")
public class WarningController {

  private final AttachService attachService;
  private final WarningService warningService;
  private final WarningMatterService warningMatterService;

  private final static Path YW_PATH = Paths.get("fs/attach");


  @PostMapping("yellow/{id}")
  /* 黄 */
  public void YellowExcelRead(@PathVariable Long id) {
    Attach attach = attachService.findFileById(id);
    String name = attach.getFsFileName();
    String fileName = YW_PATH.resolve(name).toString();
    EasyExcel.read(fileName, Yellowwarning.class, new PageReadListener<Yellowwarning>(dataList -> {
      var yellowWarnings = new ArrayList<Yellowwarning>();
      for (Yellowwarning yellowwarning : dataList) {
        String dateExl = yellowwarning.getYjsjExl();
        if (warningService.dateStrIsValid(dateExl)) {
          log.trace(dateExl);
          LocalDateTime dateformat = LocalDateTime.parse(dateExl, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
          yellowwarning.setYjsj(dateformat);
          yellowwarning.setModelid(Integer.parseInt(yellowwarning.getMoudelidExl()));
          yellowwarning.setYjlx(Integer.parseInt(yellowwarning.getYjlxExl()));
          yellowWarnings.add(yellowwarning);
        }
      }
      warningService.saveAllY(yellowWarnings);
    })).sheet().headRowNumber(1).doRead();
  }

  @PostMapping("red/{id}")
  /* 红 */
  public void RedExcelRead(@PathVariable Long id) {
    Attach attach = attachService.findFileById(id);
    String name = attach.getFsFileName();
    String fileName = YW_PATH.resolve(name).toString();
    EasyExcel.read(fileName, Redwarning.class, new PageReadListener<Redwarning>(dataList -> {

          var redWarnings = new ArrayList<Redwarning>();
          for (Redwarning redwarning : dataList) {
            String dateExl = redwarning.getYswtfxsjExl();
            if (dateExl != null && dateExl.length() != 0) {
              if (warningService.dateStrIsValid(dateExl)) {
                LocalDateTime dateformat = LocalDateTime.parse(dateExl, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
                redwarning.setId(null);
                redwarning.setYswtfxsj(dateformat);
                redWarnings.add(redwarning);
              }
            }
          }
          warningService.saveAllR(redWarnings);
        })

    ).sheet().headRowNumber(1).doRead();
  }

  @GetMapping("/yellow")
  public List<Yellowwarning> findAllYellow() {
    return warningService.findYellow();
  }

  @GetMapping("/red")
  public List<Redwarning> findAllRed() {
    return warningService.findRed();
  }

  @GetMapping("/yellow/{id}")
  public Yellowwarning findOneYellow(@PathVariable Long id) {
    return warningService.findOneYellow(id);
  }

  @GetMapping("/red/{id}")
  public Redwarning findOneRed(@PathVariable Long id) {
    return warningService.findOneRed(id);
  }

  @PostMapping("/yellow/matter")
  public YellowMatter createMatter(YellowMatter input) {
    return warningMatterService.create(input);
  }

  @GetMapping(value = "/yellow/matter")
  public List<YellowMatter> findAll(@RequestParam(required = false) Boolean current) {
    if (BooleanUtils.isTrue(current)) {
      return warningMatterService.findByCurrent();
    } else {
      return warningMatterService.findAll();
    }
  }

}

