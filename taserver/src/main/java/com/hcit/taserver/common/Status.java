package com.hcit.taserver.common;

public enum Status {

  // 无需审核
  PASSED,

  // 未提交审核
  NONE_REVIEW,

  // 待审核
  AWAITING_REVIEW,

  // 部分审核完成
  PART_REVIEW,

  // 审核完成
  REVIEWED,

  // 审核不通过
  REVIEW_DENIED,

  // 等待退回修改
  AWAITING_FIX,

  // 已修改
  FIXED,

  // 已完成
  FINISHED,
}
