import React from 'react';
import { Button, DatePicker, Input } from 'antd';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import SelectUser from '../../components/SelectUser';
import { FooterToolbar } from "@ant-design/pro-layout";

type Props = {
  isCreate?: boolean,
}

function ReportInfoPage({ isCreate }: Props) {

  const [tmpData, setTmpData] = React.useState({});

  function mergeTmpData(key, value) {
    setTmpData(orig => {
      return { ...orig, [key]: value };
    });
  }

  const columns: ColumnDef[] = [
    {
      title: '履责主体',
      dataIndex: 'user',
      renderFormItem: () => <SelectUser withUser onChange={(_, option: any) => mergeTmpData('user', option.value)}/>,
    },
    {
      title: '报告日期',
      dataIndex: 'date',
      renderFormItem: () => <DatePicker onChange={v => mergeTmpData('date', v)}/>,
    },
    {
      title: '履责情况报告',
      dataIndex: 'content',
      renderFormItem: () => <Input placeholder={'履责情况报告'} onChange={v => mergeTmpData('content', v.target.value)}/>,
    },
  ];

  const reviewColumns: ColumnDef[] = [
    {
      title: '监督评议主体',
      dataIndex: 'review',
      renderFormItem: () => <SelectUser withUser onChange={(_, option: any) => mergeTmpData('review', option.value)}/>,
    },
    {
      title: '监督评议时间',
      dataIndex: 'reviewDate',
      renderFormItem: () => <DatePicker onChange={v => mergeTmpData('reviewDate', v)}/>,
    },
  ];

  return <div className={'content'}>
    <EditableDescriptions
        isEdit={isCreate}
        columns={isCreate ? [...reviewColumns, ...columns] : columns}
    />

    {
        isCreate && <FooterToolbar>
          <Button type={'primary'}>确定</Button>
        </FooterToolbar>
    }
  </div>;
}

export default ReportInfoPage;