import React from 'react';
import { Button, Divider, Input, Modal, Space, Statistic, Switch } from 'antd';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { ProColumns } from '@ant-design/pro-table';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useHttp } from '../../utils/request';
import { matterColumns } from './MatterInfo';
import { useAuth } from '../../utils/auth';
import BaseDescriptions from '../../components/BaseDescriptions';
import { progressStatus } from '../../utils/nameMapTa';
import BaseDivider from '../../components/BaseDivider';
import FileUpload from '../../components/FileUpload';

export default function Matter() {

  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams();

  const { state, loading } = useHttp(`/matterform/0/matter/${id}`);
  const { http: updateHttp } = useHttp(`/matterform/0/matter/${id}`, { isManual: true, method: 'POST' });
  const { http: deleteHttp } = useHttp(`/matterform/0/matter/${id}`, { isManual: true, method: 'DELETE' });

  // 根据状态编辑不同内容
  const isEditMatter = user.id === state.matterForm?.user?.id && (['NONE_REVIEW', 'AWAITING_FIX'].includes(state.matterForm?.approval?.status));
  const isEditProgress = user.id === state.matterForm?.user?.id && (['NONE_REVIEW', 'AWAITING_FIX'].includes(state.matterForm?.progressApproval?.status))

  const columns: ProColumns[] = [
    { title: '措施编号', dataIndex: 'code', editable: false, renderText: t => state.code + '-' + t },
    { title: '措施内容', dataIndex: 'content', renderFormItem: () => <Input.TextArea style={{ width: 800 }} /> },
    { title: '整改内容', dataIndex: 'progress', renderFormItem: () => <Input.TextArea style={{ width: 800 }} /> },
    {
      title: '整改状态',
      dataIndex: 'progressStatus',
      renderText: t => progressStatus[t],
      valueType: 'select',
      fieldProps: { options: [{ label: '已完成', value: 'DONE' }, { label: '部分完成', value: 'PART_DONE' }] }
    }
  ];

  const [info, setInfo] = React.useState<any>({});
  const [measure, setMeasure] = React.useState<any>([]);
  const [attach, setAttach] = React.useState<any>([]);
  React.useEffect(() => {
    setInfo(state);
    setMeasure(state.measure);
    setAttach(state.progressAttach);
  }, [state]);

  return <PageContainer
      content={<Space size={'large'}>
        <Statistic title={'问题编号'} value={state.code} />
        <Statistic title={'责任主体'} value={state.matterForm?.user?.name} />
      </Space>}
      loading={loading}
  >

    <Divider orientation={'left'}>问题详情</Divider>
    <BaseDescriptions
        dataSource={info}
        columns={matterColumns.concat([
          {
            title: '更新时间',
            dataIndex: 'updateTime',
            editable: false,
            renderText: text => moment(text).format('YYYY-MM-DD HH:mm'),
          },
          { title: '动态跟踪', dataIndex: 'trace', render: () => <Space><Switch /> 开启动态跟踪</Space>, editable: false },
        ])}
        editable={
          isEditMatter
              ? { onSave: async (_, newInfo) => setInfo(newInfo) }
              : null
        }
    />

    <Divider orientation={'left'}>措施及整改内容</Divider>
    <div>
      {
        measure?.map(r => <div key={r.id}>
          <BaseDescriptions
              dataSource={r}
              columns={columns.slice(0, 2)}
              column={1}
              editable={
                isEditMatter
                    ? { onSave: async (_, newMeasure) => setMeasure(measure?.filter(item => item.id !== newMeasure.id).concat([newMeasure])) }
                    : null
              }
          />
          <BaseDescriptions
              column={1}
              dataSource={r}
              columns={columns.slice(2)}
              editable={
                isEditProgress
                    ? { onSave: async (_, newMeasure) => setMeasure(measure?.filter(item => item.id !== newMeasure.id).concat([newMeasure])) }
                    : null
              }
          />
          <br />
        </div>)
      }
    </div>

    <BaseDivider title={'相关文件'} />
    <FileUpload value={attach} onChange={setAttach} isInEdit={isEditMatter || isEditProgress} />

    <FooterToolbar>
      {
        <Space>
          {
              (isEditMatter || isEditProgress) && <Button
                  type='primary'
                  icon={<EditOutlined />}
                  onClick={() => updateHttp(null, null, {
                    ...info,
                    endDate: info.endDate ? moment(info.endDate).format('YYYY-MM-DD') : null,
                    measure,
                    progressAttach: attach,
                  }).then(() => window.location.reload())}
              >
                暂存更新
              </Button>
          }
          {
              isEditMatter && <Button danger icon={<DeleteOutlined />} onClick={() => {
                Modal.confirm({
                  title: '是否删除该问题？',
                  icon: <ExclamationCircleOutlined />,
                  okType: 'danger',
                  onOk() {
                    deleteHttp().then(() => navigate('/fr/mz/list'));
                  },
                });
              }}
              >删除问题</Button>
          }
        </Space>
      }
    </FooterToolbar>


  </PageContainer>;

}