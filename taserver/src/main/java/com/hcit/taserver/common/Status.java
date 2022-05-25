package com.hcit.taserver.common;

public enum Status {
  // 待审核
  AWAITING_REVIEW,

  // 审核完成
  REVIEWED,

  // 审核不通过
  REVIEW_DENIED,

  // 已完成
  FINISHED,
}
