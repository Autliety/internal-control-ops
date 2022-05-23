import React from 'react';
import { useParams } from 'react-router-dom';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Statistic } from 'antd';
import showInfo from '../../utils/showInfo';
import { PageContainer } from '@ant-design/pro-layout';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useAuth } from '../../utils/auth';
import { useHttp } from '../../utils/request';

export default function Evaluation() {

  const { year } = useParams();
  const { user } = useAuth();
  const { state: data } = useHttp('/evaluation', { initState: []})

  const columns: ProColumns[] = [
    { title: '序号', dataIndex: 'id' },
    { title: '考评模块', dataIndex: 'type' },
    { title: '考核指标', dataIndex: 'name' },
    { title: '分值', dataIndex: 'value', align: 'center' },
    {
      title: '考评内容',
      dataIndex: 'content',
      renderText: text => <>
        {text.substring(0, 20)}
        {text.length > 20 && <Button type={'link'} onClick={() => showInfo(text)}>...[更多]</Button>}
      </>,
    },
    {
      title: '数据要点',
      dataIndex: 'focus',
      renderText: text => <>
        {text.substring(0, 15)}
        {text.length > 15 && <Button type={'link'} onClick={() => showInfo(text)}>...[更多]</Button>}
      </>,
    },
    { title: '系统评价得分', dataIndex: 'mark' },
    { title: '自评得分', dataIndex: 'mark' },
    { title: '互评得分', dataIndex: 'mark' },
    { title: '领导评价得分', dataIndex: 'mark' },
    { title: '综合得分', dataIndex: 'mark' },
  ];

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title="年度" value={year}/>
        <Statistic title="被考评人" value={user?.name}/>
      </Space>}
  >
    <BaseEditableTable columns={columns} value={data}/>

  </PageContainer>;
}