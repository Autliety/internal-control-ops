package com.hcit.taserver.fr.matter;

import com.hcit.taserver.department.user.User;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface MatterFormRepository extends JpaRepository<MatterForm, Long>, JpaSpecificationExecutor<MatterForm> {

  List<MatterForm> findAllByUser(User user);

  List<MatterForm> findAllByUserIn(Collection<User> users);

}
