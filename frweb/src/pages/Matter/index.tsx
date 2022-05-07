import React from 'react';
import { Button, Divider, Space, Statistic } from 'antd';
import { ArrowLeftOutlined, DiffOutlined } from '@ant-design/icons';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams } from 'react-router-dom';
import { useHttp } from '../../utils/request';
import DemoFileDownload from '../../components/DemoFileDownload';
import MeasureTable from '../MeasureList/MeasureTable';
import MatterInfo from './MatterInfo';
import BaseModal from '../../components/BaseModal';
import MeasureCreateModal from '../MeasureList/MeasureCreateModal';

export default function Matter() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [isVisible, setIsVisible] = React.useState(false);
  const { state, loading } = useHttp(`/matter/${id}`);

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)} /> 问题清单</>}
      extra={
        <Space>
          <MeasureCreateModal
              measures={state.measures}
              matterId={id}
          />
          <Button type={'primary'} onClick={() => setIsVisible(true)}><DiffOutlined />添加附件</Button>
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
    <DemoFileDownload />

    <Divider orientation={'left'}>措施清单</Divider>
    <MeasureTable
        dataSource={state.measures || []}
    />

    <BaseModal
        title={'附件上传'}
        isVisible={isVisible}
        onCancel={() => setIsVisible(false)}
    />

    {state.status === 'AWAITING_REVIEW' &&
    <FooterToolbar>
      <Button
          type={'primary'}
          onClick={() => console.log(state.id)}
      >审核通过
      </Button>
    </FooterToolbar>}
  </PageContainer>;

}