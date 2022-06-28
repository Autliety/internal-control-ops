import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Collapse } from 'antd';
import { permissionTypeTa } from '../../utils/nameMapTa';

const { Panel } = Collapse;

export const permissionTa = {

  ASSESSMENT_CREATE: '考核指标新建',
  ASSESSMENT_UPDATE: '考核指标修改',

  PLAN_CREATE: '工作计划新建',
  PLAN_UPDATE: '工作计划修改',

  TASK_CREATE: '工作进度新建',
  TASK_UPDATE:'工作进度修改',

  APPRAISAL_CREATE: '考评新建',
  APPRAISAL_UPDATE: '考评修改',

  WALL: '回音壁相关权限',
};

export function getPermissionTa(data) {
  const permission = {
    ASSESSMENT: [],
    PLAN: [],
    TASK: [],
    APPRAISAL: [],
    WALL: [],
  };
  Object.keys(data).forEach((item) => {
    permission[item.split('_')[0]].push({ value: item, label: data[item] });
  });
  return permission;
}

export default function PermissionTa() {

  return <PageContainer>
    <Collapse defaultActiveKey={['ASSESSMENT']} bordered={false}>
      {
        Object.keys(getPermissionTa(permissionTa)).map(item => <Panel
            key={item}
            header={permissionTypeTa[item]}
        >
          {
            getPermissionTa(permissionTa)[item].map((i, index) => <p
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