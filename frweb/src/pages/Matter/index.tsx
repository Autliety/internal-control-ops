import React from 'react';
import { Button, Divider, Space, Statistic } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import DemoFileDownload from '../../components/DemoFileDownload';
import MeasureTable from '../MeasureList/MeasureTable';
import MatterInfo from './MatterInfo';
import BaseModal from '../../components/BaseModal';
import MeasureCreateModal from '../MeasureList/MeasureCreateModal';
import DemoProcess from '../../components/DemoProcess';

export default function Matter() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [isVisible, setIsVisible] = React.useState(false);
  const { state, loading } = useHttp(`/matter/${id}`);
  const { http } = useHttp('/matter', { method: 'PATCH', isManual: true });

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 问题清单</>}
      extra={
        <Space>
          <MeasureCreateModal
              measures={state.measures}
              matterId={id}
          />
        </Space>
      }
      content={<Space size={'large'}>
        <Statistic title={'编号'} value={'WT001'} />
        <Statistic title={'问题类型'} value={'日常监督检查'} />
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>问题详情</Divider>
    <MatterInfo dataSource={state} />

    <Divider orientation={'left'}>相关附件</Divider>
    <DemoFileDownload />

    <Divider orientation={'left'}>措施清单</Divider>
    <MeasureTable
        dataSource={state.measures || []}
    />


    {!state.measures || state.measures.length === 0 ||
    <>
      <Divider orientation={'left'}>措施清单审核流程</Divider>
      <DemoProcess status={state.status} list={[{title: '党政综合办公室', name: '李均敬'}]}/>
    </>
    }

    <BaseModal
        title={'附件上传'}
        isVisible={isVisible}
        onCancel={() => setIsVisible(false)}
    />

    {state.status === 'AWAITING_REVIEW' &&
    <FooterToolbar>
      <Button
          type={'primary'}
          onClick={() => http(state.id).then(() => window.location.reload())}
      >审核通过
      </Button>
    </FooterToolbar>}
  </PageContainer>;

}