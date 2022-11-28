package com.hcit.taserver.fr.alert;

import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/alert")
public class AlertController {

  private final AlertService alertService;

  @GetMapping
  public Map<String, List<?>> getAlert(@RequestParam(required = false) Boolean current) {
    if (BooleanUtils.isNotTrue(current)) {
      current = false;
    }
    return Map.of("matter", alertService.getAlertMatters(current),
        "three", alertService.getAlertThree(current));
  }
}
