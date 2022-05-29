package com.hcit.taserver.department;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequiredArgsConstructor

@RestController
@RequestMapping("/station")
public class StationController {

  private final StationService stationService;

  @GetMapping
  public Collection<Station> getAll(@RequestParam(required = false) Long deptId) {
    if (deptId == null) {
      return stationService.findAll();
    } else {
      return stationService.findAllByDeptId(deptId);
    }
  }

}
