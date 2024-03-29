import React, { useState } from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Divider } from 'antd';
import MeasureInfo from '../Measure/MeasureInfo';
import { useHttp } from '../../utils/request';
import ProgressInfo from './ProgressInfo';
import MeasureTable from '../MeasureList/MeasureTable';
import BaseDivider from '../../components/BaseDivider';
import { useBoolean } from 'ahooks';
import ApproveAndCopyModal from '../../components/ApproveAndCopyModal';
import UserSelectCascader from '../../components/UserSelectCascader';
import ApprovalTable from '../../components/ApprovalTable';
import FileUpload from '../../components/FileUpload';

export default function Progress() {

  const navigate = useNavigate();
  const { id } = useParams();

  const { state } = useHttp(`/progress/${id}`);
  const { http: patch } = useHttp(`/progress/${id}`, { method: 'PATCH', isManual: true });

  const [isInEdit, { setTrue: start, setFalse: end }] = useBoolean(false);
  const [progress, setProgress] = useState<any>({});
  const [subUser, setSubUser] = React.useState<any>();
  const [attach, setAttach] = React.useState<any[]>();

  return <PageContainer>
    <BaseDivider title={'措施信息'} onLink={() => navigate(`/fr/mz/list/measure/${state.measure.id}`)}/>
    <MeasureInfo dataSource={state.measure}/>

    <Divider orientation={'left'}>履责情况</Divider>
    <ProgressInfo
        dataSource={isInEdit ? { ...state, ...progress } : state}
        editable={isInEdit ? {
          onSave: async (_, newInfo) => setProgress(newInfo),
        } : null}
    />

    <BaseDivider title={'相关附件'}/>
    <FileUpload isInEdit={isInEdit} value={attach || state.attach || []} onChange={setAttach}/>

    <Divider orientation={'left'}>协调配合</Divider>
    <div className='content'>
      <UserSelectCascader disabled={!isInEdit} value={subUser || state.subUser} onChange={setSubUser}/>
    </div>

    <Divider orientation={'left'}>后续措施</Divider>
    <div className='content'>
      {state.continueMeasure ?
          <MeasureTable dataSource={[state.continueMeasure]}/>
          :
          <Button type={'primary'} disabled>添加后续措施</Button>
      }
    </div>

    {state.status !== 'NONE_REVIEW' ?
        <>
          <Divider orientation={'left'}>审核流程</Divider>
          <ApprovalTable value={state.approval}/>
        </>
        :

        (isInEdit ?
            <FooterToolbar>
              <Button onClick={end}>取消</Button>
              <Button
                  type={'primary'}
                  onClick={() => patch(null, null, {...progress, subUser, attach})
                      .then(() => window.location.reload())}
              >
                更新
              </Button>
            </FooterToolbar>
            :
            <FooterToolbar>
              <Button onClick={start}>更新进度</Button>
              <ApproveAndCopyModal
                  onSubmit={approval => patch(null, null, { ...state, status: 'AWAITING_REVIEW', approval })
                      .then(() => window.location.reload())}
              />
            </FooterToolbar>)
    }
  </PageContainer>;
}