import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';
import { Button, Space, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';

export default function TopicMatter({ isEdit, data, onChange }) {

  const columns: ProColumns[] = [
    { title: '编号', dataIndex: 'code', editable: false },
    { title: '问题内容', dataIndex: 'content' },
    { title: '问题类型', dataIndex: 'type' },
    { title: '问题来源', dataIndex: 'origin' },
    { title: '截止日期', dataIndex: 'endDate', valueType: 'date' },
    {
      dataIndex: 'operation',
      render: () => <Space>
        <Tooltip title={'添加措施'}>
          <Button
              type={'primary'}
              icon={<ContainerOutlined />}
              size={'small'}
          />
        </Tooltip>
      </Space>,
      width: 50,
      align: 'center',
      editable: false
    }
  ];

  return <>
    <BaseEditableTable
        isInEdit={isEdit}
        value={data}
        columns={columns}
        onChange={onChange}
    />
  </>;
}