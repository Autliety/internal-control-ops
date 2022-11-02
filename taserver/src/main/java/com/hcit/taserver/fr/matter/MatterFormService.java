package com.hcit.taserver.fr.matter;

import com.hcit.taserver.department.user.AuthService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MatterFormService {

  private final MatterFormRepository matterFormRepository;
  private final AuthService authService;

  public List<MatterForm> getAllForCurrentUser() {
    return matterFormRepository.findAll(
        ((root, query, cb) ->
            query.where(authService.getPrivilegePredicate(root, cb)).getRestriction()));
  }

  public MatterForm findById(Long id) {
    return matterFormRepository.findById(id).orElseThrow();
  }
}
