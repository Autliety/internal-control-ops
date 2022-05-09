import React from 'react';
import { Button, Modal } from 'antd';
import { PartitionOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import BaseTable from '../../components/BaseTable';
import { matterColumns } from '../Matter/MatterInfo';
import SelectUser from '../../components/SelectUser';
import { useHttp } from '../../utils/request';

export default function MatterPartingModal({ dataSource }) {

  const [isModalOpen, { setTrue: openModal, setFalse: closeModal }] = useBoolean(false);
  const [upd, setUpd] = React.useState({});
  const { http } = useHttp('/matter/t/upd', { isManual: true });

  return <>
    <Button type={'primary'} onClick={openModal}><PartitionOutlined />问题分派</Button>
    <Modal
        title="问题分派"
        closable
        destroyOnClose
        visible={isModalOpen}
        onCancel={closeModal}
        onOk={() => http(upd).then(window.location.reload)}
        width={1600}
    >
      <BaseTable
          columns={matterColumns.concat([
            {
              title: '分派',
              dataIndex: 'department',
              width: 160,
              render: () => <>
                <SelectUser onChange={setUpd} />
              </>,
            },
          ])}
          dataSource={dataSource}
      />
    </Modal>
  </>;
}