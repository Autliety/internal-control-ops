import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Modal, Space, Statistic } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import showInfo from '../../utils/showInfo';
import { PageContainer } from '@ant-design/pro-layout';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useAuth } from '../../utils/auth';

export default function Evaluation() {

  const { user } = useAuth();

  const { type, year } = useParams();

  const [search] = useSearchParams();
  const userId = search.get('userId');

  const { state: evaluationData } = useHttp(`/evaluation/${type}`, { initState: [] });
  const { state: scoreData } = useHttp(user.id === parseInt(userId) ? `/usereva/score` : `/usereva/score?userId=${userId}`, { initState: [] });

  const navigate = useNavigate();

  // 领导评分modal
  const [isVisible, setVisible] = React.useState<boolean>(false);

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
    { title: '系统评分【70%】', dataIndex: 'auto', renderText: t => parseFloat(t || 0).toFixed(2) },
    { title: '领导评分【20%】', dataIndex: 'leader', renderText: t => parseFloat(t || 0).toFixed(2) },
    { title: '自评得分【10%】', dataIndex: 'self', renderText: t => parseFloat(t || 0).toFixed(2) },
    {
      title: '综合得分',
      dataIndex: 'total',
      renderText: t => <Button type={'link'} danger>{parseFloat(t || 0).toFixed(2)}</Button>
    },
  ];

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title='年度' value={year} groupSeparator={''} />
      </Space>}
      extra={user.id === parseInt(userId)
          ? [
            <Button
                type={'primary'}
                icon={<FormOutlined />}
                onClick={() => navigate(`/fr/pz/score/${type}`)}
            >
              自评得分
            </Button>
          ]
          : [
            <Button
                type={'primary'}
                icon={<FormOutlined />}
                onClick={() => setVisible(true)}
            >
              领导评价
            </Button>
          ]
      }
  >
    <BaseEditableTable
        columns={columns}
        value={evaluationData.map(item => ({ ...item, ...(scoreData.find((i: any) => i?.evaluationId === item.id)) }))}
    />

    <Modal
        title={'选择被评人'}
        visible={isVisible}
        closable
        destroyOnClose
        onOk={() => navigate(`/fr/pz/score/${type}?isLeader=true`, { state: { user: { id: parseInt(userId) } } })}
        onCancel={() => setVisible(false)}
    >
      <UserSelectCascader value={{ id: parseInt(userId) }} disabled />

    </Modal>

  </PageContainer>;
}