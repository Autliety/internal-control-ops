import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Collapse, Divider, Input, Space } from 'antd';
import { FileSearchOutlined, ImportOutlined, PlusSquareOutlined } from '@ant-design/icons';

import { useHttp } from '../../utils/request';
import AssessmentTable from "../../components/AssessmentTable";

const { Panel } = Collapse;

export default function Assessment() {

  const { state } = useHttp('/assessment', { initState: [] });

  return <PageContainer
      extra={
        <Space size={'middle'}>
          <Button type={'primary'}><PlusSquareOutlined/>新增</Button>
          <Button type={'primary'}><ImportOutlined/>导入</Button>
        </Space>
      }
  >
    <Space size={'middle'}>
      <Input.Search placeholder={'搜索'} enterButton/>
      <Button type={'primary'}><FileSearchOutlined/>精确查找</Button>
    </Space>
    <Divider/>

    <AssessmentTable dataSource={state.filter(v => v.children === null || v.children.length === 0)}/><br/>

    {/* 各部门指标列表 */}
    <Collapse defaultActiveKey={0}>
      {
        state.filter(v => v.children !== null && v.children.length !== 0).map((item, index) => (
            <Panel key={index} header={item.name}>
              <AssessmentTable dataSource={item.children}/>
            </Panel>
        ))
      }
    </Collapse>
  </PageContainer>;
}
