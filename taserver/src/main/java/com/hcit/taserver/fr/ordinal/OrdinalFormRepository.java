package com.hcit.taserver.fr.ordinal;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdinalFormRepository extends JpaRepository<OrdinalForm, Long> {

  List<OrdinalForm> findAllByFormType(FormType formType);
}
