package com.hcit.taserver.fr.ordinal;

import io.swagger.annotations.Api;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "常规表单")

@RequiredArgsConstructor
@RestController
@RequestMapping("/ordinal")
public class OrdinalFormController {

  private final OrdinalFormService ordinalFormService;

  @GetMapping("/{typeString}")
  public List<OrdinalForm> fetchAll(@PathVariable String typeString) {
    var formType = FormType.valueOf(typeString.toUpperCase());
    return ordinalFormService.findAllByFormType(formType);
  }

  @GetMapping("/{typeString}/{id}")
  public OrdinalForm fetch(@PathVariable String typeString, @PathVariable Long id) {
    var formType = FormType.valueOf(typeString.toUpperCase());
    return ordinalFormService.findByFormTypeAndId(formType, id);
  }

  @PostMapping("/{typeString}")
  public OrdinalForm create(@PathVariable String typeString, @RequestBody OrdinalForm ordinalForm) {
    var formType = FormType.valueOf(typeString.toUpperCase());
    return ordinalFormService.create(formType, ordinalForm);
  }

  @PostMapping("/{typeString}/{id}")
  public OrdinalForm update(@PathVariable String typeString, @PathVariable Long id,@RequestBody OrdinalForm ordinalForm){
    return ordinalFormService.update(id,ordinalForm);
  }
}
