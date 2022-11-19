import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import BaseDescriptions from '../../components/BaseDescriptions';
import { inspectColumns, matterColumns } from '../InspectList';
import { useHttp } from '../../utils/request';
import BaseDivider from '../../components/BaseDivider';
import FileUpload from '../../components/FileUpload';
import BaseEditableTable from '../../components/BaseEditableTable';

export default function Inspect() {

  const { id } = useParams();
  const { state } = useHttp(`/ordinal/inspect/${id}`);
  const { http } = useHttp(`/ordinal/inspect/${id}`, { method: 'POST', isManual: true });

  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  const [tmpData, setTmpData] = React.useState<any>({});
  const [matter, setMatter] = React.useState<any>([]);
  const [attach, setAttach] = React.useState<any[]>();
  React.useEffect(() => {
    setTmpData(state);
    setMatter(state?.matter);
    setAttach(state?.attach);
  }, [state]);

  return <PageContainer>
    <BaseDivider title={'基本信息'} />
    <BaseDescriptions
        columns={inspectColumns}
        dataSource={tmpData}
        isInEdit={isEdit}
        onChange={e => setTmpData({ ...tmpData, ...e })}
    />

    <BaseDivider title={'相关问题'} />
    <BaseEditableTable
        value={matter}
        columns={matterColumns}
        isInEdit={isEdit}
        onChange={v => setMatter(v)}
    />

    <BaseDivider title={'上传附件'} />
    <FileUpload value={attach || []} isInEdit={isEdit} onChange={setAttach} />

    <FooterToolbar>
      {isEdit || <Button type={'primary'} onClick={() => setIsEdit(true)}>编辑</Button>}
      {
          isEdit &&
          <Button type={'primary'} onClick={() => http(null, null, {
            ...tmpData,
            time1: moment(tmpData.time1).valueOf(),
            matter: matter,
            attach: attach
          }).then(() => window.location.reload())}>确定</Button>
      }
      {isEdit && <Button onClick={() => window.location.reload()}>取消</Button>}
    </FooterToolbar>

  </PageContainer>;
}