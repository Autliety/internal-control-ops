import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useHttp } from '../../utils/request';
import BaseStepForm from '../../components/BaseStepForm';
import { ProColumns } from '@ant-design/pro-table';
import UserSelectCascader from '../../components/UserSelectCascader';
import { Select } from 'antd';
import FileUpload from '../../components/FileUpload';
import { useAuth } from '../../utils/auth';

type Props = {
  isFirstEdit: boolean,
  id?: number,
}

export default function ReportCreateModal({ isFirstEdit, id }: Props) {

  const reportType = {
    1: '民主（组织）生活会前谈心谈话报告',
    2: '党委（党组织）专题会前集中报告',
    3: '特殊情况报告',
    4: '向区（镇）党委、纪委书面报告',
    5: '向县委、县纪委书面报告',
    6: '向区（镇）分管领导报告'
  }

  const navigate = useNavigate();
  const { user } = useAuth();
  const { state: userState } = useHttp('/user', { initState: [] });
  const { state } = useHttp(`/ordinal/report/${id}`, { initState: {}, isManual: !id });
  const { http: updateHttp } = useHttp(`/ordinal/report/${id}`, { method: 'POST', isManual: true });
  const { http } = useHttp('/ordinal/report', { method: 'POST', isManual: true });

  // 根据用户决定报告类型和监督评议人
  function setType(user: any) {
    let option = [], supervisor: any = {};
    if (user.id === 1 && user.department?.id === 1) {
      option = [reportType[5]];
    } else if (user.id === 2 && user.department?.id === 2) {
      supervisor = userState?.find(u => u.id === 1);
      option = [reportType[2], reportType[5]];
    } else if (user.privilege === 'DOUBLE' && user.department?.id === 3) {
      supervisor = userState?.find(u => u.id === 2);
      option = [reportType[1], reportType[2], reportType[3]];
    } else if (user.department?.id === 4) {
      supervisor = userState?.find(u => u.id === 1);
      option = [reportType[2], reportType[5]];
    } else if (user.department?.id === 5) {
      supervisor = userState?.find(u => u.id === 1);
      option = [reportType[2]];
    } else if (user.privilege === 'DEPT' && user.department?.deptType === 'VILLAGE') {
      supervisor = userState?.find(u => u.id === 1);
      option = [reportType[4]];
    } else if (user.privilege === 'FIRST' && user.department?.deptType === 'VILLAGE') {
      supervisor = userState?.find(u => u.id === 2);
      option = [reportType[2], reportType[4]];
    } else if (user.privilege === 'DOUBLE' && user.department?.deptType === 'VILLAGE') {
      // todo 给当前user的department添加字段（用于判断村社书记或党组织）
      supervisor = userState?.find(u => u.department?.firstUser);
      option = [reportType[1], reportType[2], reportType[3]];
    } else if (user.privilege === 'DEPT_J' && user.department?.deptType === 'VILLAGE') {
      // todo 同上
      supervisor = userState?.find(u => u.department?.deptUser);
      option = [reportType[2], reportType[4]];
    } else if (user.privilege === 'DEPT' && user.department?.deptType === 'STATION') {
      // todo 同上
      supervisor = userState?.find(u => u.department?.firstUser);
      option = [reportType[6]]
    } else if (user.privilege === 'FIRST' && user.department?.deptType === 'STATION') {
      // todo 同上
      supervisor = userState?.find(u => u.department?.firstUser);
      option = [reportType[6]];
    }
    return { supervisor, option };

  }

  const reportColumns: ProColumns[] = [
    {
      title: '报告人',
      dataIndex: 'singleUser1',
      renderText: t => t?.name,
      renderFormItem: () => <UserSelectCascader disabled value={user} />,
    },
    {
      title: '报告类型',
      dataIndex: 'content1',
      renderFormItem: () => <Select>
        {
          setType(user).option?.map((item, index) => <Select.Option
              value={item}
              key={index}
          >
            {item}
          </Select.Option>)
        }
      </Select>,
      formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    },

    {
      title: '履责情况报告',
      dataIndex: 'longContent1',
      valueType: 'textarea',
      hideInTable: true,
      formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    },
    {
      title: '报告日期',
      dataIndex: 'time1',
      valueType: 'date',
      formItemProps: { rules: [{ required: true, message: '此项必填' }] },
    },
    {
      title: '监督评议人',
      dataIndex: 'singleUser2',
      renderFormItem: () => <Select>
        <Select.Option value={setType(user).supervisor?.id}>
          {setType(user).supervisor?.name}
        </Select.Option>
      </Select>,
      renderText: () => setType(user).supervisor?.name
    },
    { title: '上传附件', dataIndex: 'attach', renderFormItem: () => <FileUpload isInEdit />, hideInDescriptions: true },
    {
      title: '监督评议主体',
      dataIndex: 'singleUser2',
      renderText: t => t?.name,
      renderFormItem: () => <UserSelectCascader disabled value={setType(user).supervisor} />
    },
    { title: '监督评议意见', dataIndex: 'longContent2', valueType: 'textarea', hideInTable: true },
    { title: '监督评议时间', dataIndex: 'time2', valueType: 'date' },
  ];

  return <>
    <BaseStepForm
        title='履责报告'
        isFirstEdit={isFirstEdit}
        formConfig={{
          0: { title: '基本信息', columns: reportColumns.slice(0, 6) },
          1: { title: '监督评议', columns: reportColumns.slice(6) },
        }}
        value={state}
        onFinish={async (data: any) => {
          if (data.time1) {
            data.time1 = moment(data.time1).valueOf();
          }
          if (data.time2) {
            data.time2 = moment(data.time2).valueOf();
          }
          let res = isFirstEdit
              ? await http(null, null, { ...data, singleUser1: user, integer1: 1 })
              : await updateHttp(null, null, { ...state, ...data, integer1: parseInt(state.integer1) + 1 });
          navigate('/fr/lz/report/' + res.id);
        }}
    />
  </>;
}