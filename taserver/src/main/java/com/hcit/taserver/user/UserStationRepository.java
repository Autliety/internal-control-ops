package com.hcit.taserver.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserStationRepository extends JpaRepository<UserStation, Integer> {
}
