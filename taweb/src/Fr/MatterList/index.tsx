import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Space } from 'antd';
import { useHttp } from '../../utils/request';
import MatterTable from './MatterTable';

export default function MatterList() {

  const { state, loading } = useHttp('/matter', { initState: [] });
  const { http } = useHttp('/matter', { method: 'POST', isManual: true });

  const [isInEdit, setIsInEdit] = React.useState(false);
  const [editValue, setEditValue] = React.useState([]);
  React.useEffect(() => {
    if (!isInEdit) setEditValue(state);
  }, [isInEdit, setEditValue, state]);

  return <PageContainer
      extra={
        <Space size={'middle'}>
          <Button type={'primary'} onClick={() => setIsInEdit(true)}>修改问题清单</Button>
        </Space>
      }
  >
    {isInEdit ?
        <>
          <MatterTable value={editValue} onChange={setEditValue} loading={loading} isSearch isInEdit/>
          <FooterToolbar>
            <Button onClick={() => setIsInEdit(false)}>取消</Button>
            <Button type={'primary'} onClick={() => http(null, null, editValue.map(o => {
              if (o.origin instanceof Array) {
                o.origin = o.origin.join(' / ');
              }
              return o;
            }))
                .then(() => window.location.reload())}>保存</Button>
          </FooterToolbar>
        </>
        :

        <MatterTable value={state} loading={loading} isSearch/>
    }

  </PageContainer>;
}