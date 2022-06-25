package com.hcit.taserver.fr.inform;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InformRepository extends JpaRepository<Inform, Long> {

}
