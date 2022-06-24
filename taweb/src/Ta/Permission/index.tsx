import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Collapse } from 'antd';
import { permissionType } from "../../utils/nameMapTa";

const { Panel } = Collapse;

export const permission = {

  ASSESSMENT_VIEW: '考核指标查看',
  ASSESSMENT_CREATE: '考核指标新建',
  ASSESSMENT_UPDATE: '考核指标修改',

  PLAN_VIEW: '工作计划查看',
  PLAN_CREATE: '工作计划新建',
  PLAN_UPDATE: '工作计划修改',

  TASK_VIEW: '工作进度查看',
  TASK_CREATE: '工作进度新建',
  TASK_UPDATE: '工作进度修改',

  APPRAISAL_VIEW: '考评情况查看',
  APPRAISAL_CREATE: '考评情况新建',
  APPRAISAL_UPDATE: '考评情况修改',

  WALL_VIEW: '回音壁内容查看',
  WALL_CREATE: '回音壁内容新建',
  WALL_UPDATE: '回音壁内容修改',
};


export function getPermission(data) {
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

export default function Permission() {

  return <PageContainer>
    <Collapse defaultActiveKey={['ASSESSMENT']} bordered={false}>
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