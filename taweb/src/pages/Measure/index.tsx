import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Button, Descriptions, Divider, List, message, Radio, Space, Statistic, Table, Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { CheckOutlined, FileAddOutlined } from '@ant-design/icons';
import ProForm, {
  ModalForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-form';

export default function Measure() {

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [radioValue, setRadioValue] = React.useState('1');

  const columns: ColumnsType = [
    { title: '问题内容', dataIndex: 'matter' },
    {
      title: '是否已制定措施',
      dataIndex: 'isMeasured',
      width: '8%',
      align: 'center',
      render: text => text ? <CheckOutlined/> : <></>,
    },
    {
      title: '制定措施',
      dataIndex: 'operation',
      render: () => <Tooltip title={'点击添加一条措施'}>
        <Button
            type={'primary'}
            icon={<FileAddOutlined/>}
            size={'small'}
            onClick={() => setIsVisible(true)}
        />
      </Tooltip>,
      fixed: 'right',
      width: 100,
      align: 'center',
    },
  ];

  const data = [
    {
      key: '1',
      code: 'WT088-01',
      matter: '深入基层调研不够',
      isMeasured: true,
      measures: [
        {
          isExist: false,
          measure: '利用政务公开栏，向社会公开全办的政务情况。',
          principalOrg: '领导班子',
          principalUser: '吴胜杰',
          startTime: '2022-04-21',
          endTime: '2022-06-21',
        },
      ],
    },
    {
      key: '2',
      code: 'WT088-02',
      matter: '请销假制度督办不严',
      isMeasured: true,
      measures: [
        {
          isExist: false,
          measure: '利用政务公开栏，向社会公开全办的政务情况。利用政务公开栏，向社会公开全办的政务情况。利用政务公开栏，向社会公开全办的政' +
              '务情况。利用政务公开栏，向社会公开全办的政务情况。利用政务公开栏，向社会公开全办的政务情况。利用政务公开栏，向社会公开全办的政' +
              '务情况。利用政务公开栏，向社会公开全办的政务情况。利用政务公开栏，向社会公开全办的政' +
              '务情况。利用政务公开栏，向社会公开全办的政务情况。利用政务公开栏，向社会公开全办的政务情况。',
          principalOrg: '领导班子',
          principalUser: '吴胜杰',
          startTime: '2022-04-21',
          endTime: '2022-06-21',
        },
        {
          isExist: false,
          measure: '深入基层开展普法活动。',
          principalOrg: '领导班子',
          principalUser: '赵小龙',
          startTime: '2022-04-21',
          endTime: '2022-06-21',
        },
      ],
    },
  ];

  // table expand
  const expandedRowRender = (record) => {
    return <List
        className={'content'}
        itemLayout={'vertical'}
        dataSource={record}
        renderItem={(item: any) => (
            <List.Item extra={<Button type={'link'} onClick={() => message.warning('先不要编辑！')}>编辑</Button>}>
              <Descriptions layout='vertical' column={4} colon={false}>
                <Descriptions.Item
                    label={<span style={{ color: '#918d8c' }}>措施内容</span>}
                    style={{ width: '70%', paddingRight: '2%' }}
                >
                  {item.measure}
                </Descriptions.Item>


                <Descriptions.Item label={<span style={{ color: '#918d8c' }}>责任人 | 部门</span>} style={{ width: '18%' }}>
                  {item.principalUser}<Divider type={'vertical'}/>{item.principalOrg}
                </Descriptions.Item>

                <Descriptions.Item label={<span style={{ color: '#918d8c' }}>起止时间</span>} style={{ width: '10%' }}>
                  {item.startTime}<Divider type={'vertical'}/>{item.endTime}
                </Descriptions.Item>
              </Descriptions>
            </List.Item>
        )}
    />;
  };

  return <PageContainer
      title={'问题措施列表'}
      content={
        <Space size={'large'}>
          <Statistic title='责任主体' value='领导班子'/>
          <Statistic title='问题数量' value='3'/>
        </Space>
      }
  >

    <Table
        pagination={false}
        columns={columns}
        dataSource={data}
        bordered
        expandable={{
          expandedRowRender: (record: any) => expandedRowRender(record.measures),
          rowExpandable: record => record.isMeasured,
        }}
    />

    <ModalForm
        title='措施添加'
        visible={isVisible}
        onFinish={async (v) => {
          console.log(v);
          return true;
        }}
        modalProps={{
          destroyOnClose: true
        }}
        onVisibleChange={setIsVisible}
    >

      <Radio.Group onChange={e => setRadioValue(e.target.value)} value={radioValue}>
        <Radio value={'1'}>新建措施</Radio>
        <Radio value={'2'}>引用已有措施</Radio>
      </Radio.Group>
      <Divider/>

      <ProForm.Group>
        <ProFormText width='md' name='principal' label='责任主体' initialValue={'领导班子'} disabled/>
        <ProFormText width='md' name='matter' label='问题内容' initialValue={'请销假制度监管不严格'} disabled/>
      </ProForm.Group>

      {
        radioValue === '1'
            ? <ProFormTextArea width='xl' name='measure' label='工作措施' placeholder='措施内容'/>
            : <ProFormSelect
                width='xl'
                options={[
                  { value: '已有措施001', label: '已有措施001' },
                  { value: '已有措施002', label: '已有措施002' },
                ]}
                name='measure'
                label='请选择'
                tooltip={'引用已存在措施文字'}
            />
      }
      <ProForm.Group>
        <ProFormSelect
            width='sm'
            initialValue={{ value: '1', label: '领导班子' }}
            options={[]}
            name='principalOrg'
            disabled
            label='责任单位'
        />
        <ProFormSelect
            width='sm'
            options={[
              { value: '1', label: '王哲' },
              { value: '2', label: '张小龙' },
            ]}
            name='principalUser'
            label='责任人'
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormDatePicker width='sm' name='startTime' label='开始时间'/>
        <ProFormDatePicker width='sm' name='endTime' label='结束时间'/>
      </ProForm.Group>
    </ModalForm>

    <FooterToolbar>
      <Button
          type={'primary'}
          disabled={data.filter(i => !i.isMeasured).length !== 0}
          onClick={() => message.success('领导审批')}
      >
        领导审批
      </Button>
    </FooterToolbar>
  </PageContainer>;
}