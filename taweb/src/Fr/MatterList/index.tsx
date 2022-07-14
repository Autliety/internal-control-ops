import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Divider, Modal, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ProFormSelect, ProFormText, QueryFilter, } from '@ant-design/pro-components';
import { useHttp } from '../../utils/request';
import MatterTable from './MatterTable';
import MatterAssignModal from './MatterAssignModal';
import UserSelectCascader from "../../components/UserSelectCascader";
import { matterColumns } from "../Matter/MatterInfo";
import { useAuth } from "../../utils/auth";

export default function MatterList() {

  const { user } = useAuth();

  const { state, loading } = useHttp('/matter', { initState: [] });
  const { http } = useHttp('/matter', { method: 'POST', isManual: true });

  const [isInEdit, setIsInEdit] = React.useState(false);
  const [editValue, setEditValue] = React.useState([]);

  React.useEffect(() => {
    if (!isInEdit) setEditValue(state);
  }, [isInEdit, setEditValue, state]);

  // 提交审核
  const [isVisible, setIsVisible] = React.useState(false);
  const [checker, setChecker] = React.useState(user.id);


  return <PageContainer
      extra={
        <Space size={'middle'}>
          <MatterAssignModal/>
          <Button type={'primary'} onClick={() => setIsInEdit(true)} icon={<PlusOutlined/>}>问题添加</Button>
        </Space>
      }
  >

    <QueryFilter
        onFinish={async values => console.log(values)}
    >
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
    </QueryFilter>

    {isInEdit
        ? <>
          <MatterTable value={editValue} onChange={setEditValue} loading={loading} isSearch isInEdit/>
          <FooterToolbar>
            <Button onClick={() => setIsInEdit(false)}>取消</Button>
            <Button type={'primary'} onClick={() => http(null, null, editValue.map(o => {
              if (o.origin instanceof Array) {
                o.origin = o.origin.join(' / ');
              }
              return o;
            })).then(() => window.location.reload())}>保存</Button>
          </FooterToolbar>
        </>
        : <MatterTable value={state} loading={loading} isSearch/>
    }

    {
        state.some(i => i.measureStatus === 'REVIEWED')
        && <FooterToolbar>
          <Button type='primary' onClick={() => setIsVisible(true)}>提交审核</Button>
        </FooterToolbar>
    }

    {/* 提交审核Modal */}
    <Modal
        title='审核内容'
        visible={isVisible}
        width={1500}
        closable
        // todo api
        onOk={() => console.log({ matter: state.filter(i => i.measureStatus === 'NONE_REVIEW'), user: checker })}
        onCancel={() => setIsVisible(false)}
    >
      <MatterTable columns={matterColumns} value={state.filter(i => i.measureStatus === 'NONE_REVIEW')}/>
      <Divider dashed/>
      <p>审核人</p>
      <UserSelectCascader value={checker} onChange={v => setChecker(v)}/>

    </Modal>
  </PageContainer>;
}