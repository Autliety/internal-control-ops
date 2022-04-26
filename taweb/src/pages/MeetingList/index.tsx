import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, DatePicker, Divider, Form, Input, Modal, Radio, Select, Space, Table, Tooltip } from 'antd';
import { ContainerOutlined, CopyOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table/interface';
import { useNavigate } from 'react-router-dom';
import { CheckCard } from '@ant-design/pro-card';

import { useHttp } from '../../utils/request';

export default function MeetingList() {

  // 测试数据
  const data = [
    { id: 1, type: '"1"专题会议', code: 'HY001', startTime: '2021-12-25 23:59:59', placement: '行政楼会议室403', count: 9 },
    { id: 2, type: '"X"专门会议', code: 'HX001', startTime: '2021-8-17 12:00:00', placement: '行政楼会议室207', count: 12 },
    { id: 3, type: '"X"专门会议', code: 'HX003', startTime: '2021-8-17 12:00:00', placement: '行政楼会议室207', count: 14 },
  ];

  const navigate = useNavigate();

  const { state: userState } = useHttp('/user?deptId=1', { initState: [] });

  // 筛选属于党委、纪委、领导班子、组织部门以及办所的人员
  function filterUser(userState) {
    let users = [{ name: '党委书记', id: 100 }, { name: '纪委书记', id: 101 }, { name: '组织部领导', id: 102 }];
    userState.forEach(item => users.push(item));
    return Array.from(new Set(users));
  }

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const columns: ColumnsType = [
    { title: '会议编号', dataIndex: 'code' },
    { title: '会议类型', dataIndex: 'type' },
    { title: '责任主体', dataIndex: 'department', render: () => '党委' },
    { title: '会议地点', dataIndex: 'placement' },
    { title: '会议时间', dataIndex: 'startTime' },
    { title: '参会人数', dataIndex: 'count' },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record: any) => <Space>
        <Tooltip title={'查看详情'}>
          <Button
              type={'primary'}
              icon={<ContainerOutlined />}
              size={'small'}
              onClick={() => navigate(`/v2/meeting/${record.id}`)}
          />
        </Tooltip>
        <Tooltip title={'生成问题清单'}>
          <Button
              type={'primary'}
              disabled
              icon={<CopyOutlined />}
              size={'small'}
              onClick={() => navigate(`/v2/meeting/${record.id}`)}
          />
        </Tooltip>
      </Space>,
      fixed: 'right',
      width: 80,
      align: 'center',
    },
  ];

  return <PageContainer
      title={'"1+X"四方会议'}
      extra={
        <Button type={'primary'} onClick={() => setIsVisible(true)}>
          <PlusSquareOutlined />
          会议通知
        </Button>
      }
  >
    <Space>
      <Select defaultValue={0} dropdownMatchSelectWidth={100}>
        <Select.Option value={0}>全部</Select.Option>
        <Select.Option value={1}>"1"专题会议</Select.Option>
        <Select.Option value={2}>"X"专门会议</Select.Option>
      </Select>
      <Input.Search placeholder={'搜索'} enterButton />
    </Space>

    <Divider />

    <Table
        rowKey={'id'}
        bordered
        columns={columns}
        dataSource={data}
    />

    {/* 会议新建 */}
    <Modal
        visible={isVisible}
        width={1000}
        title="新建会议"
        okText="创建"
        destroyOnClose
        onCancel={() => setIsVisible(false)}
        onOk={() => {
          form
          .validateFields()
          .then(values => {
            form.resetFields();
            console.log(values);
          })
          .catch(info => {
            console.log('创建失败：', info);
          });
        }}
    >
      <Form
          form={form}
          layout="vertical"
          name="meetingCreate"
      >
        <Form.Item
            name="startTime"
            label="会议时间"
            rules={[{ required: true, message: '请输入' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
            name="placement"
            label="会议地点"
            rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder={'会议地点'} />
        </Form.Item>
        <Form.Item name="type" label="会议类型" rules={[{ required: true, message: '请选择' }]}>
          <Radio.Group>
            <Radio value="one">’1‘专题会议</Radio>
            <Radio value="x">’X‘专门会议</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
            name="attendee"
            label="与会人员"
            rules={[{ required: true, message: '请选择' }]}
        >

          <CheckCard.Group
              multiple
              size={'small'}
              onChange={value => {
                console.log('value', value);
              }}
          >
            {
              filterUser(userState).map(item => <CheckCard
                  bordered
                  title={item.name}
                  value={item.id}
              />)
            }
          </CheckCard.Group>

        </Form.Item>
      </Form>
    </Modal>
  </PageContainer>
      ;
}