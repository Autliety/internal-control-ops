package com.hcit.taserver.fr.yunshao.yellow;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface YellowMatterRepository extends JpaRepository<YellowMatter, Long> {

  List<YellowMatter> findAllByUserId(Long id);

  YellowMatter findByYellowwarningId(Long id);
}
