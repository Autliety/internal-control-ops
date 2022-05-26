import React from 'react';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import BaseEditableTable from '../../components/BaseEditableTable';
import { matterColumns } from '../Matter/MatterInfo';
import { useAuth } from '../../utils/auth';

export default function MatterCreateModal() {

  const { user } = useAuth();
  const isPartingOnly = user.id >= 30; // todo fix the condition

  const [isOpen, { setTrue: open, setFalse: close }] = useBoolean(false);
  const [state, setState] = React.useState<any>([]);

  return <>
    <Button onClick={open}><PlusOutlined/>建立清单</Button>

    <Modal
        title={'建立/编辑问题清单'}
        width={1600}
        visible={isOpen}
        onCancel={close}
        onOk={() => {console.log('state', state);}}
    >
      <BaseEditableTable isInEdit columns={matterColumns} value={state} onChange={setState}/>
    </Modal>
  </>;
}