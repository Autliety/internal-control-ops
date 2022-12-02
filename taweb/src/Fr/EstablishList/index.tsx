import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { BackTop, Button, Select, Space, Tooltip } from 'antd';
import moment from 'moment';
import { useHttp } from '../../utils/request';
import BaseDivider from '../../components/BaseDivider';
import ApprovalTable from '../../components/ApprovalTable';
import ApprovalFooterToolbar from '../../components/ApprovalFooterToolbar';
import { useAuth } from '../../utils/auth';
import { useNavigate, useParams } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';
import { ContainerOutlined } from '@ant-design/icons';
import UserSelectCascader from '../../components/UserSelectCascader';
import { statusEnum } from '../../utils/nameMapTa';
import MatterCardList from './MatterCardList';
import MatterCreateModal from './MatterCreateModal';

type Props = {
  isProgress?: boolean,
}

function EstablishList({ isProgress = false }: Props) {

  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { state, loading } = useHttp(`/matterform${id ? '/' + id : '?current=true'}`, { initState: {} });
  const { http: updateHttp } = useHttp(`/matterform/${user.id}`, { method: 'POST', isManual: true });

  const [year, setYear] = React.useState(2022);

  return <PageContainer
      extra={
        <Space size={'middle'}>
          <MatterCreateModal
              data={state}
              isAdd={user.id === state?.user?.id && (['NONE_REVIEW', 'AWAITING_FIX'].includes(state?.approval?.status))}
          />
        </Space>
      }
      loading={loading}
  >
    <BackTop />
    <div className={'content'}>
      年度：<Select onChange={v => setYear(v)} value={year} style={{ width: 200 }}>
      <Select.Option value={2022}>2022年</Select.Option>
    </Select>
    </div>

    {!state.matters?.length || <>
      <div className='content'>
        <Space direction={'vertical'} size={'small'}>
          <p>
            责任主体：<UserSelectCascader value={state.user} disabled />
          </p>
          <p>当前状态：责任清单 {statusEnum[state.approval?.status]} 落实情况 {statusEnum[state.progressApproval?.status]}</p>
          <p>更新时间：{moment(state.updateTime).format('YYYY-MM-DD HH:mm')}</p>
        </Space>
      </div>

      <BaseDivider title={'本主体责任清单'} />
      <MatterCardList value={state.matters} user={state.user} />
    </>}

    {!state.children?.length || <>
      <BaseDivider title={'管理主体责任清单'} />
      <BaseEditableTable
          value={state.children}
          columns={[
            { title: '责任主体', dataIndex: ['user', 'name'] },
            { title: '问题数', dataIndex: ['matters'], render: l => l?.length },
            { title: '责任清单', dataIndex: ['approval', 'status'], render: s => statusEnum[s] },
            { title: '落实情况', dataIndex: ['progressApproval', 'status'], render: s => statusEnum[s] },
            {
              title: '详情',
              dataIndex: 'operation',
              fixed: 'right',
              width: 60,
              align: 'center',
              render: (_, record: any) => <Space>
                <Tooltip title={'详情'}>
                  <Button
                      type={'primary'}
                      icon={<ContainerOutlined />}
                      size={'small'}
                      onClick={() => navigate(`/fr/${isProgress ? 'lz' : 'mz'}/list/${record.id}`)}
                  />
                </Tooltip>
              </Space>,
            },
          ]}
      />
    </>}

    <ApprovalTable value={state[isProgress ? 'progressApproval' : 'approval']} />

    <ApprovalFooterToolbar
        value={state[isProgress ? 'progressApproval' : 'approval']}
        // onSave={() => updateHttp(null, null, childMatterForm).then(() => window.location.reload())}
        defaultConfig={{ disabled: true }}
    />

  </PageContainer>;
}

export default EstablishList;