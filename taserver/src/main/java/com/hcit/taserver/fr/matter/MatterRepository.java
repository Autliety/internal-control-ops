package com.hcit.taserver.fr.matter;

import com.hcit.taserver.common.Status;
import com.hcit.taserver.department.user.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface MatterRepository extends JpaRepository<Matter, Long>, JpaSpecificationExecutor<Matter> {

  List<Matter> findAllByUserAndStatus(User user, Status status);

}
