package com.hcit.taserver.ta.wall;

import com.hcit.taserver.department.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdviceService {

  private final AdviceRepository adviceRepository;

  private final UserRepository userRepository;

  public Advice create(Advice advice) {
    return adviceRepository.save(advice);
  }

  public List<Advice> findAll(){
    return  adviceRepository.findAll();
  }
}
