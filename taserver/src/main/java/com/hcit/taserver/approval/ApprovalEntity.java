package com.hcit.taserver.approval;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.hcit.taserver.common.Status;

public interface ApprovalEntity {

  Status getStatus();

  void setStatus(Status status);

  Approval getApproval();

  void setApproval(Approval approval);

  @JsonProperty("status")
  default Status getApprovalStatus() {
    if (getStatus() != null) {
      return getStatus();
    }
    if (getApproval() != null) {
      return getApproval().getStatus();
    }
    return Status.PASSED;
  }

}
