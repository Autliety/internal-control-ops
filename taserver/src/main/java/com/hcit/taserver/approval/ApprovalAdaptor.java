package com.hcit.taserver.approval;

public interface ApprovalAdaptor {

  void onReview(Approval approval);

  void onDenied(Approval approval);

  void onFixed(Approval approval);
}
