package com.hcit.taserver.department;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserStationRepository extends JpaRepository<UserStation, Long> {

  List<UserStation> findAllByUserId(Long id);
}
