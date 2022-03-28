import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Modal, Radio, Space, Table } from 'antd';
import { ColumnsType } from "antd/lib/table/interface";
import { Link } from "react-router-dom";
import {FileTextOutlined} from '@ant-design/icons';

type Props = {
  isSelected?: boolean,
}

export default function WorkPlan({ isSelected }: Props) {
  const [radioValue, setRadioValue] = React.useState<string>('0');

  // 完成标准详细信息
  function showInfo(text) {
    Modal.info({
      title: '完成标准详情',
      content: <p>{text}</p>,
      icon: undefined
    });
  }

  const dataSource = [
    {
      id: '1',
      name: '计划A',
      assessmentStandard: 'convention',
      completionStandard: '西湖南、西、北三面环山，湖中白堤、苏堤、杨公堤、赵公堤将湖面分割成若干水面。西湖的湖体轮廓呈近椭圆形，湖底部' +
          '较为平坦，湖泊平均水深为2.27米，最深约5米，最浅不到1米。湖泊天然地表水源是金沙涧、龙泓涧、赤山涧（慧因涧）、长桥溪四条溪流。',
      completionTime: '2022-03-17',
      workAssignment: '暂未指派',
      remark: '测试数据',
    },
    {
      id: '2',
      name: '计划B',
      assessmentStandard: 'temporary',
      completionStandard: '西湖南、西、北三面环山，湖中白堤、苏堤、杨公堤、赵公堤将湖面分割成若干水面。西湖的湖体轮廓呈近椭圆形，湖底部' +
          '较为平坦，湖泊平均水深为2.27米，最深约5米，最浅不到1米。湖泊天然地表水源是金沙涧、龙泓涧、赤山涧（慧因涧）、长桥溪四条溪流。',
      completionTime: '2022-03-17',
      workAssignment: '川建国',
      remark: '测试数据',
    },
  ];

  const assessmentType = {
    convention: '考核指标0001',
    temporary: '考核指标0002',
  }

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'id', width: 150 },
    { title: '计划名称', dataIndex: 'name' },
    {
      title: '关联考核指标',
      dataIndex: 'assessmentStandard',
      render: (_, record: any) => <Link to={`/assessment/${record.assessmentStandard}`}>
        {assessmentType[record.assessmentStandard]}
      </Link>,
    },
    {
      title: '完成标准',
      dataIndex: 'completionStandard',
      render: text => <>
        {text.substring(0, 30) + '···'}
        <Button type={'link'} onClick={() => showInfo(text)}>[更多]</Button>
      </>,
      width: 600,
    },
    { title: '预计完成时间', dataIndex: 'completionTime' },
    { title: '工作指派情况', dataIndex: 'workAssignment' },
    { title: '备注', dataIndex: 'remark' },
    { title: '详情', render: () => <Button type={'link'}><FileTextOutlined /></Button> },
  ];

  return <PageContainer
      extra={<Button type={'primary'}>新建</Button>}
  >
    {
        isSelected && <div className='content'>
          <Radio.Group value={radioValue} buttonStyle='solid' onChange={e => setRadioValue(e.target.value)}>
            <Space size={'large'}>
              <Radio.Button value='0'>季度计划</Radio.Button>
              <Radio.Button value='1'>月度计划</Radio.Button>
            </Space>
          </Radio.Group>
        </div>
    }
    <br/>

    <Table
        bordered
        size={'small'}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 1700,
        }}

        columns={columns}
        rowKey={'id'}

        dataSource={dataSource}
    />

  </PageContainer>;

}
