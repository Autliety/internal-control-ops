import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, {
  ModalForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { Button, Descriptions, Divider, List, message, Radio, Space, Statistic } from 'antd';
import { ArrowLeftOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function MeasureInfo() {

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [radioValue, setRadioValue] = React.useState('1');
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      isExist: false,
      measure: '利用政务公开栏，向社会公开全办的政务情况。',
      principalOrg: '领导班子',
      principalUser: '吴胜杰',
      startTime: '2022-04-21',
      endTime: '2022-06-21',
    },
    {
      id: 2,
      isExist: false,
      measure: '深入基层开展普法活动。',
      principalOrg: '领导班子',
      principalUser: '赵小龙',
      startTime: '2022-04-21',
      endTime: '2022-06-21',
    },
  ];

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 措施添加</>}
      content={<Space size={'large'}>
        <Statistic title={'责任部门'} value={'领导班子'}/>
        <Statistic title={'问题内容'} value={'深入基层调研不够'}/>
      </Space>}
      extra={<Button type={'primary'} onClick={() => setIsVisible(true)}> <PlusSquareOutlined />添加措施</Button>}
  >
    <List
        className={'content'}
        itemLayout={'vertical'}
        header={'措施列表'}
        dataSource={data}
        renderItem={item => (
            <List.Item extra={<Button type={'link'} onClick={() => message.warning('先不要编辑！')}>编辑</Button>}>
              <Descriptions layout='vertical' column={5} colon={false}>
                <Descriptions.Item span={3} label={<span style={{ color: '#918d8c' }}>措施内容</span>}>
                  {item.measure}
                </Descriptions.Item>
                <Descriptions.Item label={<span style={{ color: '#918d8c' }}>责任人 | 部门</span>}>
                  {item.principalUser}<Divider type={'vertical'}/>{item.principalOrg}
                </Descriptions.Item>
                <Descriptions.Item label={<span style={{ color: '#918d8c' }}>起止时间</span>}>
                  {item.startTime}<Divider type={'vertical'}/>{item.endTime}
                </Descriptions.Item>
              </Descriptions>
            </List.Item>
        )}
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
        <Radio value={'2'}>选择已有措施</Radio>
      </Radio.Group>
      <Divider/>

      <ProForm.Group>
        <ProFormText width='md' name='principal' label='责任主体' initialValue={'领导班子'} disabled/>
        <ProFormText width='md' name='detail' label='问题内容' initialValue={'请销假制度监管不严格'} disabled/>
      </ProForm.Group>

      {
        radioValue === '1'
            ? <div>
              <ProFormTextArea width='xl' name='measure' label='工作措施' placeholder='措施内容'/>

              <ProForm.Group>
                <ProFormSelect
                    width='sm'
                    options={[
                      { value: '1', label: '领导班子' },
                      { value: '2', label: '纪委' },
                    ]}
                    name='principalOrg'
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
            </div>
            : <ProFormSelect
                width='xl'
                options={[
                  { value: '1', label: '已有措施001' },
                  { value: '2', label: '已有措施002' },
                ]}
                name='tempId'
                label='请选择'
            />
      }
    </ModalForm>

  </PageContainer>;
}