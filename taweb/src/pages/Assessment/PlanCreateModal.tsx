import React from 'react';
import { Button, Divider, Modal, Space } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import BaseEditableTable from "../../components/BaseEditableTable";
import { detailColumns } from "../Plan/PlanDetailTable";
import UserSelectCascader from "../../components/UserSelectCascader";
import { useHttp } from "../../utils/request";
import SelectUser from "../../components/SelectUser";



export default function PlanCreateModal({ title ='制定计划'}) {

  const [isVisible, setIsVisible] = React.useState(false);
  const [detailData, setDetailData] = React.useState([]);
  const [planData, setPlanData] = React.useState({});
  const { http } = useHttp('/plan', { method: 'POST', isManual: true });

  return <>
    <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusCircleOutlined/>{title}</Button>

    <Modal
        width={1400}
        title={title}
        visible={isVisible}
        closable
        onCancel={() => setIsVisible(false)}
        onOk={() => http(null, null, { ...planData, detail: detailData }).then(() => window.location.reload())}
    >

      <Space size={'large'}>
        <SelectUser placeholder={'计划负责部门'} onChange={v => setPlanData({ ...planData, department: { id: v } })}/>
        <UserSelectCascader placeholder={'请选择计划负责人'} onChange={v => setPlanData({ ...planData, user: v })}/>
      </Space>
      <Divider/>
      <BaseEditableTable
          columns={detailColumns}
          isInEdit={isVisible}
          value={detailData}
          onChange={v => setDetailData(v)}
      />

    </Modal>
  </>;
}