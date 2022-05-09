package com.hcit.taserver.department;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  List<User> findAllByStationIdIn(List<Long> stationIds);
}
