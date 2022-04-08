import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Collapse, Divider, Input, Modal, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { FileSearchOutlined, ImportOutlined, PlusSquareOutlined } from '@ant-design/icons';
import numeral from 'numeral';

import { useHttp } from '../../utils/request';
import { assessmentValueType } from '../../utils/nameMap';

const { Panel } = Collapse;

export default function Assessment() {

  const { state } = useHttp('/assessment', { initState: [] });

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
      render: (text, record: any) => record.valueType === 'MONEY'
          ? assessmentValueType[record.valueType] + numeral(text).format('0,000.00')
          : text + assessmentValueType[record.valueType]
    },
    //  todo 展示详细部门名称
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

  return <PageContainer
      extra={
        <Space size={'middle'}>
          <Button type={'primary'}><PlusSquareOutlined/>新增</Button>
          <Button type={'primary'}><ImportOutlined/>导入</Button>
        </Space>
      }
  >
    <Space size={'middle'}>
      <Input.Search placeholder={'搜索'} enterButton/>
      <Button type={'primary'}><FileSearchOutlined/>精确查找</Button>
    </Space>
    <Divider/>

    {/* 未分解指标列表 */}
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

        dataSource={state.filter(v => v.children === null || v.children.length === 0)}
    /><br/>

    {/* 各部门指标列表 */}
    <Collapse defaultActiveKey={0}>
      {
        state.filter(v => v.children !== null && v.children.length !== 0).map((item, index) => (
            <Panel key={index} header={item.name}>
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

                  dataSource={item.children}
              />
            </Panel>
        ))
      }
    </Collapse>
  </PageContainer>;
}
