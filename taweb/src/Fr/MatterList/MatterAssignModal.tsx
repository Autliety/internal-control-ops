import React from 'react';
import { Button, Modal } from 'antd';
import { FunnelPlotOutlined } from '@ant-design/icons';
import MatterTable from './MatterTable';
import { useHttp } from '../../utils/request';
import { matterColumns } from '../Matter/MatterInfo';
import UserSelectCascader from '../../components/UserSelectCascader';
import { useAuth } from '../../utils/auth';

function MatterAssignModal() {

  const [isVisible, setIsVisible] = React.useState(false);
  const [value, setValue] = React.useState([]);

  const { http } = useHttp('/matter', { method: 'POST', isManual: true });
  const { user } = useAuth();

  const userFilter = (v: any) => {
    if (user.id === 1) {
      return v.id < 30;
    } else if (user.privilege === 'DEPT') {
      return v.department?.id === user.department.id;
    } else {
      return false;
    }
  }

  return <>
    <Button
        type={'dashed'}
        icon={<FunnelPlotOutlined/>}
        disabled={user.privilege !== 'DEPT'}
        onClick={() => {
          setValue([]);
          setIsVisible(true);
        }}
    >
      问题交办
    </Button>

    <Modal
        title='问题交办'
        width={1500}
        visible={isVisible}
        onOk={() => http(null, null, value.map(o => {
          if (o.origin instanceof Array) {
            o.origin = o.origin.join(' / ');
          }
          return o;
        })).then(() => window.location.reload())}
        onCancel={() => setIsVisible(false)}
    >
      <MatterTable
          columns={matterColumns.slice(0, -2).concat([
            {
              title: '责任主体',
              dataIndex: 'user',
              renderText: u => u?.name,
              renderFormItem: () => <UserSelectCascader filter={userFilter}/>,
            }
          ])}
          value={value}
          onChange={setValue}
          isInEdit={isVisible}
      />
    </Modal>
  </>;
}

export default MatterAssignModal;