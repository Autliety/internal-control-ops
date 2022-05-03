package com.hcit.taserver.fr.measure;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeasureRepository extends JpaRepository<Measure, Long> {

  List<Measure> findAllByMatterId(Long matterId);
}
