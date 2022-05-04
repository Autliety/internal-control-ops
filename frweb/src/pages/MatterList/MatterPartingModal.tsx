import React from 'react';
import { Button, Modal, Select } from 'antd';
import { PartitionOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import BaseTable from '../../components/BaseTable';
import { matterColumns } from '../Matter/MatterInfo';

export default function MatterPartingModal({ dataSource }) {

  const [isModalOpen, { setTrue: openModal, setFalse: closeModal }] = useBoolean(false);

  return <>
    <Button type={'primary'} onClick={openModal}><PartitionOutlined />问题分派</Button>
    <Modal
        title="问题分派"
        closable
        destroyOnClose
        visible={isModalOpen}
        onCancel={closeModal}
        width={1600}
    >
      <BaseTable
          columns={matterColumns.concat([
            {
              title: '分派',
              dataIndex: 'department',
              width: 160,
              render: () => <>
                <Select
                    dropdownMatchSelectWidth={100}
                    options={[{ label: '纪委', value: '1' }, { label: 'xx站办', value: '2' }]} />
              </>,
            },
          ])}
          dataSource={dataSource}
      />
    </Modal>
  </>;
}