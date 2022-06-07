package com.hcit.taserver.ta.assessment;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.read.listener.PageReadListener;
import com.hcit.taserver.department.DepartmentRepository;
import com.hcit.taserver.department.user.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AssessmentFileService {

  private final AssessmentRepository assessmentRepository;
  private final UserRepository userRepository;
  private final DepartmentRepository departmentRepository;

  public void test() {
    EasyExcel.read("fs/import.xlsx", Assessment.class,
            new PageReadListener<Assessment>(list -> {
              for (Assessment a : list) {
                var names = List.of(a.getRespUserContent().split("。"));
                var users = userRepository.findAllByNameIn(names);
                if (names.size() != users.size()) {
                  System.out.println(names);
                }
                a.setRespUser(users);
                var dNames = List.of(a.getRespDepartmentContent().split("。"));
                var ds = departmentRepository.findAllByNameInOrShortNameIn(dNames, dNames);
                if (dNames.size() != ds.size()) {
                  System.out.println(dNames);
                }
                a.setRespDepartment(ds);
              }
              assessmentRepository.saveAll(list);
            }))
        .sheet()
        .headRowNumber(6)
        .doRead();
  }

}
