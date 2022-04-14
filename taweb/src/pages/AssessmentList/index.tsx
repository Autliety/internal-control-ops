import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Input, Select, Space, Spin } from 'antd';
import { FileSearchOutlined, ImportOutlined, PlusSquareOutlined } from '@ant-design/icons';

import { useHttp } from '../../utils/request';
import AssessmentTable from './AssessmentTable';
import DemoSpecialAssessment from '../../components/DemoSpecialAssessment';


export default function AssessmentList() {

  const [onList, setOnList] = React.useState(0);
  const { state, loading } = useHttp('/assessment', { initState: [] });

  return <PageContainer
      extra={
        <Space size={'middle'}>
          <Button type={'primary'}><PlusSquareOutlined />新增</Button>
          <Button type={'primary'}><ImportOutlined />导入</Button>
        </Space>
      }
  >
    <Space>
      <Select value={onList} onChange={setOnList}>
        <Select.Option value={0}>“六大提升行动”任务清单</Select.Option>
        <Select.Option value={1}>党政整体智治负面清单</Select.Option>
        <Select.Option value={2}>特色品牌创建工作考核</Select.Option>
      </Select>
      <Input.Search placeholder={'搜索'} enterButton />
      <Button><FileSearchOutlined />精确查找</Button>
    </Space>

    <Divider />

    <Spin spinning={loading}>
      {onList === 0 &&
      <AssessmentTable isParent dataSource={state.filter(v => !v.parentId)} />
      }
      {onList === 1 &&
      <DemoSpecialAssessment />
      }
      {onList === 2 &&
      <DemoSpecialAssessment dataIndex={2} />
      }
    </Spin>
  </PageContainer>;
}
