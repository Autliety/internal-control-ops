import React from 'react';
import { Button, Modal } from 'antd';
import { FunnelPlotOutlined } from '@ant-design/icons';
import MatterTable from './MatterTable';
import { useHttp } from '../../utils/request';

function MatterAssignModal() {

  const [isVisible, setIsVisible] = React.useState(false);
  const [value, setValue] = React.useState([]);

  const { http } = useHttp('/matter', { method: 'POST', isManual: true });

  return <>
    <Button type={'dashed'} icon={<FunnelPlotOutlined/>} onClick={() => {
      setValue([]);
      setIsVisible(true);
    }}>问题交办</Button>

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
      <MatterTable value={value} onChange={setValue} isInEdit={isVisible}/>
    </Modal>
  </>;
}

export default MatterAssignModal;