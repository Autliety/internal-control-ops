package com.hcit.taserver.fr.matter;

import com.hcit.taserver.approval.Approval;
import io.swagger.annotations.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.BooleanUtils;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor

@Api(tags = "问题")
@RestController
@RequestMapping("/matter")
public class MatterController {

  private final MatterService matterService;


  @GetMapping
  public List<Matter> findByStatus(Matter matter) {
    return matterService.findByCondition(matter);
  }

  @GetMapping("/{id}")
  public Matter findById(@PathVariable Long id) {
    return matterService.findById(id);
  }

  @PostMapping
  @Transactional
  public List<Matter> create(@RequestParam(required = false) Boolean self, @RequestBody List<Matter> matters) {
    return BooleanUtils.isTrue(self) ? matterService.createAll(matters) : matterService.createAllWithoutApprove(matters);
  }

  @Transactional
  @PostMapping("/approval")
  public Approval submitApproval() {
    return matterService.submitApproval();
  }

}
