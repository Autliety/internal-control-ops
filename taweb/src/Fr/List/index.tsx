import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { Button, Space, Tooltip } from 'antd';
import { BarsOutlined, ContainerOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { statusEnum } from '../../utils/nameMapTa';
import BaseEditableTable from '../../components/BaseEditableTable';

function List() {
  const navigate = useNavigate();
  const columns: ProColumns[] = [
        { title: '年度', dataIndex: 'year' },
        { title: '责任主体', dataIndex: 'user' },
        {
          title: '审核状态',
          dataIndex: 'status',
          valueEnum: statusEnum,
        },
        {
          title: '二审状态',
          dataIndex: 'stepTwoStatus',
          valueEnum: statusEnum,
        },
        {
          dataIndex: 'operation',
          render: (_, record: any) => <Space>
            <Tooltip title={'问题清单'}>
              <Button
                  type={'primary'}
                  icon={<ContainerOutlined />}
                  size={'small'}
                  // todo path
                  onClick={() => navigate(`/fr/mz/list/matter`)}
              />
            </Tooltip>
            <Tooltip title={'措施清单'}>
              <Button
                  type={'primary'}
                  icon={<BarsOutlined />}
                  size={'small'}
                  // todo path
                  onClick={() => navigate(`/fr/mz/list/measure`)}
              />
            </Tooltip>
          </Space>,
          fixed: 'right',
          width: 100,
          align: 'center',
          editable: false,
        },
      ],
      data = [
        {
          id: 1,
          year: '2022',
          user: '沈鹏（一岗双责）',
          status: 'FINISHED',
          status1: '',
        }
      ];
  return <PageContainer>
    <BaseEditableTable columns={columns} value={data} />
  </PageContainer>;
}

export default List;