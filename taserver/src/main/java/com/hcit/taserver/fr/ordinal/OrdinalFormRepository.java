package com.hcit.taserver.fr.ordinal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrdinalFormRepository extends JpaRepository<OrdinalForm, Long>, JpaSpecificationExecutor<OrdinalForm> {

  List<OrdinalForm> findAllByFormType(FormType formType);

  List<OrdinalForm> findAllByFormTypeAndMultiUser1Id(FormType formType, Long userId);
}
