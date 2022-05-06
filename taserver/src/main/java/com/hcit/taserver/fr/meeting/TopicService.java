package com.hcit.taserver.fr.meeting;

import com.hcit.taserver.common.BasicPersistableService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TopicService implements BasicPersistableService<Topic> {

  private final TopicRepository topicRepository;

}
