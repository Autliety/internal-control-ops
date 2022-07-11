import React from 'react';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from '../../components/BaseEditableTable';
import { Button, Tooltip } from 'antd';
import { ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

type Props = {
  isInEdit?: boolean,
  value?: any,
  onChange?: any,
  withMatter?: boolean,
};

export default function TopicTask(
    {
      isInEdit = false,
      withMatter = false,
      value = [],
      onChange = () => {
      },
    }: Props,
) {

  const navigate = useNavigate();

  const columns: ProColumns[] = [
    {
      title: '责任主体',
      dataIndex: ['user', 'name'],
      editable: false,
    },
    {
      title: '职责任务概述',
      dataIndex: 'content',
    },
  ];

  return <>
    <BaseEditableTable
        disableAdd={withMatter}
        isInEdit={isInEdit}
        columns={columns.concat(isInEdit ? [] : {
          dataIndex: 'operation',
          render: (_, record: any) => <Tooltip title={'查看详情'}>
            <Button
                type={'primary'}
                icon={<ContainerOutlined/>}
                size={'small'}
                onClick={() => navigate(`topic/${record.topic.id}`)}
            />
          </Tooltip>,
          fixed: 'right',
          width: 60,
          align: 'center',
        })}
        value={value}
        onChange={onChange}
    />
  </>;
}