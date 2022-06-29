package com.hcit.taserver.fr.ordinal;

import java.util.Arrays;
import java.util.EnumMap;
import java.util.function.Function;
import java.util.stream.Collectors;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum FormType {

  INSPECT("监督检查"),
  TALKING("5+1谈话"),
  THREE("三重一大"),
  PERSONAL("个人事项报告"),
  REPORT("年度履责报告"),
  LEADER("领导干部插手干预重大事项记录报告"),
  COMMENT("述责述廉评议"),
  REMIND("相互监督提醒"),
  CLUB("生活会"),
  QUESTION("履责约谈")
  ;

  private final String remark;

  public static final EnumMap<FormType, String> REMARK_MAP = new EnumMap<>(
      Arrays.stream(FormType.values()).collect(
          Collectors.toMap(Function.identity(), FormType::getRemark)));

}
