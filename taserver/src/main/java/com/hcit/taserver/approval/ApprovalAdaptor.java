package com.hcit.taserver.approval;

public interface ApprovalAdaptor {

  default void onReviewed(Long id) {}

}
