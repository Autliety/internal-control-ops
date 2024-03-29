package com.hcit.taserver.fr.ordinal;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdinalFormRepository extends JpaRepository<OrdinalForm, Long>, JpaSpecificationExecutor<OrdinalForm> {

  List<OrdinalForm> findAllByFormType(FormType formType);

  List<OrdinalForm> findAllByFormTypeAndSingleUser1_Id(FormType formType, Long userId);

  List<OrdinalForm> findAllByFormTypeAndMultiUser1_Id(FormType formType, Long userId);
}
