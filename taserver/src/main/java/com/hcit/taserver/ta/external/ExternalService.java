package com.hcit.taserver.ta.external;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ExternalService {

  private final ExternalRepository externalRepository;
  private final ExternalUsageRepository externalUsageRepository;

  public List<External> findAll() {
    return externalRepository.findAll();
  }

  public External findById(Long id) {
    return externalRepository.findById(id).orElseThrow();
  }

  public ExternalUsage save(ExternalUsage usage) {
    return externalUsageRepository.save(usage);
  }

  public External create(External external) {
    external.setId(null);
    return externalRepository.save(external);
  }
}
