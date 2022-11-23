package com.hcit.taserver.common;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum Status {

  // 无需审核
  PASSED(true),

  // 未提交审核
  NONE_REVIEW(true),

  // 待审核
  AWAITING_REVIEW,

  // 部分审核完成
  PART_REVIEW,

  // 审核完成
  REVIEWED,

  // 审核不通过
  REVIEW_DENIED,

  // 等待退回修改
  AWAITING_FIX(true),

  // 已修改
  FIXED,

  // 已完成
  FINISHED,

  // 额外步骤状态
  EXT_ONE(true),
  EXT_TWO(true),
  EXT_THREE(true),
  EXT_FOUR(true),

  ;

  public static Status getExtStep(Integer step) {
    if (step == null) {
      step = 0;
    }
    switch (step) {
      case 0:
        return null;
      case 1:
        return Status.EXT_ONE;
      case 2:
        return Status.EXT_TWO;
      case 3:
        return Status.EXT_THREE;
      case 4:
        return Status.EXT_FOUR;
      default:
        throw new IllegalArgumentException();
    }
  }

  private final boolean isEditable;

  Status() {
    this.isEditable = false;
  }

}
