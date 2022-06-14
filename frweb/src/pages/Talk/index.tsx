import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import BaseDescriptions from '../../components/BaseDescriptions';
import { baseColumns } from '../TalkList';

function Talk() {

  const columns1: ProColumns[] = [
        { title: '谈话对象', dataIndex: 'accepter' },
        { title: '谈话实施人', dataIndex: 'executor' },
        { title: '谈话事由', dataIndex: 'reason' },
        { title: '谈话内容', dataIndex: 'content' },
        { title: '谈话对象表态', dataIndex: 'position' },
      ],
      columns2: ProColumns[] = [
        { title: '申请谈话人', dataIndex: 'applicant' },
        { title: '互谈人', dataIndex: 'another' },
        { title: '谈话事由', dataIndex: 'reason' },
        { title: '谈话内容', dataIndex: 'content' },
      ];

  return <PageContainer>
    {/* todo 根据获取数据中 谈话指向 选择columns */}
    <BaseDescriptions columns={baseColumns.concat(columns1)} dataSource={{}}/>

  </PageContainer>;
}

export default Talk;