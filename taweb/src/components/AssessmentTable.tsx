import React from 'react';
import { ColumnsType } from 'antd/lib/table/interface';
import { Button, Modal, Table } from 'antd';
import numeral from 'numeral';

import { assessmentValueType } from '../utils/nameMap';

export default function AssessmentTable({ dataSource }) {

  // modal展示考核标准
  function showInfo(text) {
    Modal.info({
      title: '完成标准详情',
      content: <p>{text}</p>,
      icon: undefined
    });
  }

  const columns: ColumnsType = [
    { title: '详细指标名称', dataIndex: 'name' },
    { title: '权重（分）', dataIndex: 'point' },
    {
      title: '数值',
      dataIndex: 'value',
      render: (text, record: any) => record?.valueType === 'MONEY'
          ? assessmentValueType[record?.valueType] + numeral(text).format('0,000.00')
          : text + assessmentValueType[record?.valueType]
    },
    { title: '责任站办', dataIndex: 'deptId', render: () => '招商和项目推进科' },
    {
      title: '考核标准',
      dataIndex: 'standard',
      render: text => text
          ? <>
            {text.substring(0, 30) + '···'}
            <Button type={'link'} onClick={() => showInfo(text)}>[更多]</Button>
          </>
          : '暂无',
      width: 600,
    },
    { title: '创建时间', dataIndex: 'createTime' }
  ];

  return <>
    <Table
        bordered
        size={'small'}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 1700,
        }}
        pagination={false}

        columns={columns}
        rowKey={'id'}

        dataSource={Array.isArray(dataSource) ? dataSource : [dataSource]}
    />
  </>;
}