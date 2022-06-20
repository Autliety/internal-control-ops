package com.hcit.taserver.ta.external;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExternalRepository extends JpaRepository<External, Long> {

}
