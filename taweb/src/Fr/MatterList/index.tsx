import React from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {Space} from 'antd';
import {ProFormSelect, ProFormText, QueryFilter} from '@ant-design/pro-form';
import {useHttp} from '../../utils/request';
import MatterAssignModal from './MatterAssignModal';
import MatterReviewModal from './MatterReviewModal';
import MatterTable from './MatterTable';

export default function MatterList() {

  const [params, setParams] = React.useState({});
  const {state, loading} = useHttp('/matter', {initState: [], isManual: !params, params: params});

  return <PageContainer
      extra={
        <Space size={'middle'}>
          <MatterAssignModal self={false}/>
          <MatterAssignModal self={true}/>
        </Space>
      }
  >

    {<QueryFilter onFinish={async values => setParams(values)}>
      <ProFormText name='code' label='措施编号'/>
      <ProFormSelect
          name='status'
          label='措施状态'
          showSearch
          valueEnum={{
            NONE_REVIEW: '未完成',
            AWAITING_REVIEW: '待审',
            REVIEWED: '已审核',
            FINISHED: '已完成'
          }}
      />
    </QueryFilter>}

    <MatterTable value={state} loading={loading}/>

    <MatterReviewModal data={state}/>

  </PageContainer>;
}