import React from 'react';
import EditableDescriptions, { ColumnDef } from '../../components/EditableDescriptions';
import valueTypeMap from '../../utils/valueTypeMap';
import { Button } from 'antd';
import showInfo from '../../utils/showInfo';

export default function AssessmentInfo({ data }) {

  const columns: ColumnDef[] = [
    { title: '名称', dataIndex: 'name' },
    { title: '编号', dataIndex: 'code' },
    { title: '权重分值', dataIndex: 'point', render: value => valueTypeMap(value, 'POINT') },
    { title: '考核责任单位', dataIndex: 'upperDepartment' },
    {
      title: '目标',
      dataIndex: 'value',
      render: (value, record) => valueTypeMap(value, record.valueType),
    },
    {
      title: '考核标准',
      dataIndex: 'standard',
      render: text => <>
        {text.substring(0, 30)}
        {text.length > 30 && <Button type={'link'} onClick={() => showInfo(text)}>[更多]</Button>}
      </>,
    },
    { title: '考核开始时间', dataIndex: 'startTime' },
    { title: '考核结束时间', dataIndex: 'endTime' },
  ];

  return <>
    <EditableDescriptions
        columns={columns}
        // todo 数据格式需更改
        data={{ ...data, value: 50000, standard: '完成率达100%及以上的得该项赋分，未完成任务的按完成率计算得分。' }}
        isEdit={false}
    />
  </>;
}