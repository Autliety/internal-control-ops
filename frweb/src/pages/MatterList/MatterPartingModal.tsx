import React from 'react';
import { Button, Modal, Space } from 'antd';
import { PartitionOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { matterColumns } from '../Matter/MatterInfo';
import SelectUser from '../../components/SelectUser';
import { useHttp } from '../../utils/request';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function MatterPartingModal({ dataSource }) {

  const { http } = useHttp('/matter/t/upd', { isManual: true });
  const [isModalOpen, { setTrue: openModal, setFalse: closeModal }] = useBoolean(false);
  const [upd, setUpd] = React.useState({});
  const [count, setCount] = React.useState({});

  React.useEffect(() => {
    setUpd({});
    setCount({});
  }, [isModalOpen]);

  return <>
    <Button type={'primary'} onClick={openModal}><PartitionOutlined />问题分派</Button>
    <Modal
        title='问题分派'
        closable
        destroyOnClose
        visible={isModalOpen}
        onCancel={closeModal}
        onOk={() => http(upd).then(() => window.location.reload())}
        width={1600}
    >
      <BaseEditableTable
          columns={matterColumns.slice(0, -2).concat(
              {
                title: '问题分派',
                dataIndex: 'user',
                width: 160,
                render: (_, option) => <Space direction={'vertical'}>
                  {[...Array((count[option.id] || 0) + 1)].map((_, i) =>
                      <>
                        <SelectUser key={i} withUser filtered={option.userId === 30 ? 1 : 2} onChange={setUpd} />
                      </>,
                  )}
                  <Button type={'link'} onClick={() => setCount({...count, [option.id]: (count[option.id] || 0) + 1 })}>增加</Button>
                </Space>,
              },
          )}
          value={dataSource}
      />
    </Modal>
  </>;
}