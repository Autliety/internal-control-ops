package com.hcit.taserver.approval;

import com.hcit.taserver.department.user.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApprovalStepRepository extends JpaRepository<ApprovalStep, Long> {

  List<ApprovalStep> findAllByApproveUser(User approveUser);

}
