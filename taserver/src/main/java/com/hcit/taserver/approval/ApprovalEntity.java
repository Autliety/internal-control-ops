package com.hcit.taserver.approval;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.hcit.taserver.common.Status;

public interface ApprovalEntity {

  Status getStatus();

  Approval getApproval();

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
