package com.hcit.taserver.fr.matter;

import com.hcit.taserver.common.SourceType;
import com.hcit.taserver.common.Status;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatterRepository extends JpaRepository<Matter, Long> {

  List<Matter> findAllBySourceAndSourceId(SourceType source, Long sourceId);

  List<Matter> findAllByStatusNot(Status status);
}
