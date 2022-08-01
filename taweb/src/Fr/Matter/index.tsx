import React from 'react';
import { Button, Divider, Modal, Space, Statistic } from 'antd';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { useParams } from 'react-router-dom';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useHttp } from '../../utils/request';
import MeasureTable from '../MeasureList/MeasureTable';
import MatterInfo from './MatterInfo';
import MeasureCreateModal from './MeasureCreateModal';
import ApprovalTable from '../../components/ApprovalTable';
import { useAuth } from '../../utils/auth';

export default function Matter() {

  const { user } = useAuth();
  const { id } = useParams();
  const { state, loading } = useHttp(`/matter/${id}`);
  console.log(state);

  const [isInEdit, setIsInEdit] = React.useState(false);
  const [info, setInfo] = React.useState({});
  const [measure, setMeasure] = React.useState([]);
  React.useEffect(() => {
    setInfo(state);
    setMeasure(state.measure);
  }, [state]);

  // 是否删除该问题
  const isDelete = () => {
    Modal.confirm({
      title: '是否删除该问题',
      icon: <ExclamationCircleOutlined/>,
      okType: 'danger',
      onOk() {
        // todo delete api
        console.log('OK');
      },
    });
  };

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'编号'} value={state.code}/>
        <Statistic title={'责任主体'} value={state.department?.name}/>
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>问题详情</Divider>
    <MatterInfo dataSource={info} isInEdit={isInEdit}/>

    <Divider orientation={'left'}>措施清单</Divider>
    <MeasureTable
        dataSource={measure}
        isInEdit={isInEdit}
    />

    <>
      <Divider orientation={'left'}>审核流程</Divider>
      <ApprovalTable value={state.approval}/>
    </>

    {/*{*/}
    {/*    state.status === 'REVIEWED' || <FooterToolbar>*/}
    {/*      <MeasureCreateModal*/}
    {/*          measures={state.measures}*/}
    {/*          matter={state}*/}
    {/*      />*/}
    {/*    </FooterToolbar>*/}
    {/*}*/}

    {
        state.status === 'NONE_REVIEW' && user.id === state.user?.id &&
        <FooterToolbar>
          {
            isInEdit
                ? <Space>
                  <Button onClick={() => setIsInEdit(false)}>取消</Button>
                  <Button type='primary'>确定</Button>
                </Space>
                : <Space>
                  <Button danger icon={<DeleteOutlined/>} onClick={isDelete}>删除问题</Button>
                  <Button
                      type='primary'
                      icon={<EditOutlined/>}
                      onClick={() => setIsInEdit(true)}
                  >
                    问题编辑
                  </Button>
                </Space>
          }

        </FooterToolbar>
    }

  </PageContainer>;

}