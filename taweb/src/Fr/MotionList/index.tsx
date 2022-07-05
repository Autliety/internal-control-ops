import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Tooltip } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BaseEditableTable from '../../components/BaseEditableTable';
import { useHttp } from '../../utils/request';
import MotionCreateModal from "./MotionCreateModal";
import moment from "moment";

export const motionColumns: ProColumns[] = [
  {
    title: '序号',
    dataIndex: 'code', width: 80,
    hideInDescriptions: true,
    render: (_, r, index) => index + 1,
  },
  { title: '会议时间', dataIndex: 'time1', renderText: t => moment(t).format('YYYY-MM-DD HH:mm') },
  { title: '会议地点', dataIndex: 'content1' },
  { title: '会议议题', dataIndex: 'longContent1', hideInSearch: true, hideInTable: true },
  {
    title: '参会人数',
    dataIndex: 'multiUser1',
    renderText: (t => t?.length),
  },
  {
    title: '相关问题',
    dataIndex: 'matter',
    renderText: (t: any) => t?.map((item, index) => <div>
      <p>{`${index + 1}、内容：${item.content}`}</p>
      <p>{`结束日期：${moment(item.endDate).format('YYYY-MM-DD')}`}</p>
    </div>)
  }
];

function MotionList() {

  const navigate = useNavigate();
  const { state, loading } = useHttp('/ordinal/motion', { initState: [] });

  return <PageContainer
      extra={[<MotionCreateModal/>]}
      loading={loading}
  >
    <BaseEditableTable
        columns={motionColumns.slice(0, 5).concat({
          title: '详情',
          dataIndex: 'operation',
          width: 100,
          align: 'center',
          render: (_, record: any) => <Tooltip title={'详情'}>
            <Button
                type={'primary'}
                icon={<FileTextOutlined/>}
                size={'small'}
                onClick={() => navigate(`/fr/dz/motion/${record.id}`)}
            />
          </Tooltip>,
        })}
        value={state}
        isSearch
    />

  </PageContainer>;
}

export default MotionList;