package com.hcit.taserver.ta.external;

import com.hcit.taserver.department.user.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExternalUsageRepository extends JpaRepository<ExternalUsage, Long> {

  List<ExternalUsage> findAllByApplyUser(User apply);
}
