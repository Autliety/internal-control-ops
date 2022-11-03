import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Statistic } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import showInfo from '../../utils/showInfo';
import { PageContainer } from '@ant-design/pro-layout';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';

export default function Evaluation() {

  const { type, year } = useParams();
  const { state: data } = useHttp(`/evaluation/${type}`, { initState: [] });
  const navigate = useNavigate();

  const columns: ProColumns[] = [
    { title: '考评模块', dataIndex: 'type' },
    { title: '考核指标', dataIndex: 'name' },
    { title: '分值', dataIndex: 'value', align: 'center' },
    {
      title: '考评内容',
      dataIndex: 'content',
      renderText: text => <>
        {text?.substring(0, 20)}
        {text?.length > 20 && <Button type={'link'} onClick={() => showInfo(text)}>...[更多]</Button>}
      </>,
    },
    { title: '系统评分【70%】', dataIndex: 'mark' },
    { title: '领导评分【20%】', dataIndex: 'mark' },
    { title: '自评得分【10%】', dataIndex: 'mark' },
    { title: '综合得分', dataIndex: 'mark' },
  ];

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title='年度' value={year} groupSeparator={''} />
      </Space>}
      extra={[
        <Button
            type={'primary'}
            icon={<FormOutlined />}
            onClick={() => navigate('/fr/pz/score?isLeader=true')}
        >
          领导评价
        </Button>,
        <Button
            type={'dashed'}
            icon={<FormOutlined />}
            onClick={() => navigate('/fr/pz/score')}
        >
          自评得分
        </Button>
      ]}
  >
    <BaseEditableTable columns={columns} value={data}/>

  </PageContainer>;
}