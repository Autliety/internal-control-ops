package com.hcit.taserver.fr.inform;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface InformRepository extends JpaRepository<Inform, Long>, JpaSpecificationExecutor<Inform> {

  List<Inform> findAllByFromUserId(Long userId);
}
