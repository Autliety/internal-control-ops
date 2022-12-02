package com.hcit.taserver.fr.ordinal;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


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
  @Transactional
  public OrdinalForm create(@PathVariable String typeString, @RequestBody OrdinalForm ordinalForm) {
    var formType = FormType.valueOf(typeString.toUpperCase());
    return ordinalFormService.create(formType, ordinalForm);
  }

  @PostMapping("/{typeString}/{id}")
  @Transactional
  public OrdinalForm update(@PathVariable String typeString, @PathVariable Long id,@RequestBody OrdinalForm ordinalForm){
    return ordinalFormService.update(id,ordinalForm);
  }
}
