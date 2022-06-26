import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Collapse } from 'antd';
import { permissionType } from "../../utils/nameMapFr";

const { Panel } = Collapse;

export const permission = {
  MEETING_CREATE: '会议新建',
  MEETING_UPDATE: '会议修改',

  RESPONSIBILITY_UPDATE: '职责任务修改',

  MATTER_CREATE: '问题新建',
  MATTER_UPDATE: '问题修改',

  MEASURE_CREATE: '措施新建',
  MEASURE_UPDATE: '措施修改',

  DYNAMIC_CREATE: '履责登记和动态跟踪新建',
  DYNAMIC_UPDATE: '履责登记和动态跟踪修改',

  LEARNING_CREATE: '第一议题学规学记新建',
  LEARNING_UPDATE: '第一议题学规学记修改',

  REFORM_CREATE: '整改新建',
  REFORM_UPDATE: '整改修改',

  TEMPORARY_CREATE: '监督检查新建',
  TEMPORARY_UPDATE: '监督检查修改',

  DISPOSAL_CREATE: '第一种形态处置运用新建',
  DISPOSAL_UPDATE: '第一种形态处置运用修改',

  INFORM_CREATE: '一单三书新建',
  INFORM_UPDATE: '一单三书修改',

  MOTION_CREATE: '纪委动议新建',
  MOTION_UPDATE: '纪委动议修改',

  REPORT_CREATE: '履责报告新建',
  REPORT_UPDATE: '履责报告修改',

  IMPORT_CREATE: '重大事项请示报告新建',
  IMPORT_UPDATE: '重大事项请示报告修改',

  RISK_CREATE: '廉政风险排查防控新建',
  RISK_UPDATE: '廉政风险排查防控修改',

  APPRAISAL_CREATE: '履责考评新建',
  APPRAISAL_UPDATE: '履责考评修改',

  QUESTION_CREATE: '履责约谈新建',
  QUESTION_UPDATE: '履责约谈修改',

};


export function getPermission(data) {
  const permission = {
    MEETING: [],
    MATTER: [],
    RESPONSIBILITY: [],
    MEASURE: [],
    DYNAMIC: [],
    LEARNING: [],
    REFORM: [],
    TEMPORARY: [],
    DISPOSAL: [],
    INFORM: [],
    MOTION: [],
    REPORT: [],
    IMPORT: [],
    RISK: [],
    APPRAISAL: [],
    QUESTION: [],
  };
  Object.keys(data).forEach((item) => {
    permission[item.split('_')[0]].push({ value: item, label: data[item] });
  });
  return permission;
}

export default function Permission() {

  return <PageContainer>
    <Collapse defaultActiveKey={['MEETING']} bordered={false}>
      {
        Object.keys(getPermission(permission)).map(item => <Panel
            key={item}
            header={permissionType[item]}
        >
          {
            getPermission(permission)[item].map((i, index) => <p
                key={index}
                style={{ textIndent: 40 }}>
              {i.label}
            </p>)
          }
        </Panel>)
      }
    </Collapse>

  </PageContainer>;
}