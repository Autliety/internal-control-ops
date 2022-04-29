import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { ArrowLeftOutlined, PlusSquareOutlined } from '@ant-design/icons';
import ProForm, { ModalForm, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { Button, Descriptions, Divider, List, message, Radio, Space } from 'antd';

export default function TemporaryMatter() {

  const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(false);
  const data = [
    {
      code: '',
      matter: '“四个意识”不强、落实“两个维护”不到位“四个意识”不强、落实“两个维护”不到位“四个意识”不强、落实“两个维护”不到位“四个意识”不强、' +
          '落实“两个维护”不到位',
      detail: '在重大原则问题上不同党中央保持一致且有实际言论、行为且造成不良后果的。在重大原则问题上不同党中央保持一致且有实际言论、行为且' +
          '造成不良后果的。在重大原则问题上不同党中央保持一致且有实际言论、行为且造成不良后果的。在重大原则问题上不同党中央保持一致且有实际言' +
          '论、行为且造成不良后果的。在重大原则问题上不同党中央保持一致且有实际言论、行为且造成不良后果的。',
      department: '纪委',
    },
  ];
  // 测试：当前用户是党委/其他
  const [radioValue, setRadioValue] = React.useState(1);

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 临时问题</>}
      extra={<Space size={'large'}>
        <Button type={'primary'} onClick={() => setIsVisible(true)}><PlusSquareOutlined/> 添加临时问题</Button>
      </Space>}
  >
    <Radio.Group onChange={v => setRadioValue(v.target.value)} value={radioValue} className={'content'}>
      <Radio value={1}>党委</Radio>
      <Radio value={2}>其他部门</Radio>
    </Radio.Group>
    <Divider/>

    <List
        className={'content'}
        itemLayout={'vertical'}
        header={'临时问题列表'}
        dataSource={data}
        renderItem={item => (
            <List.Item extra={<Button type={'link'} onClick={() => message.warning('先不要编辑！')}>编辑</Button>}>
              <Descriptions layout='vertical' column={5} colon={false}>
                <Descriptions.Item
                    span={2}
                    label={<span style={{ color: '#918d8c' }}>问题概述</span>}
                    style={{ paddingRight: 10 }}
                >
                  {item.matter}
                </Descriptions.Item>

                <Descriptions.Item
                    span={2}
                    label={<span style={{ color: '#918d8c' }}>具体表现</span>}
                    style={{ paddingRight: 10 }}
                >
                  {item.detail}
                </Descriptions.Item>

                <Descriptions.Item label={<span style={{ color: '#918d8c' }}>问题指派1 | 问题指派2</span>}>
                  {item.department}<Divider type={'vertical'}/>{item.department}
                </Descriptions.Item>
              </Descriptions>
            </List.Item>
        )}
    />

    <ModalForm
        title='临时问题添加'
        visible={isVisible}
        onFinish={async (v) => {
          console.log(v);
          return true;
        }}
        modalProps={{
          destroyOnClose: true,
        }}
        onVisibleChange={setIsVisible}
    >
      <ProFormText width='xl' name='matter' label='问题概述' placeholder='问题概述'/>
      <ProFormTextArea width='xl' name='detail' label='具体表现' placeholder='具体表现 / 问题内容'/>

      <ProForm.Group>
        <ProFormSelect
            width='sm'
            name='department'
            label='问题指派1'
            options={[
              { value: '1', label: '领导01' },
              { value: '2', label: '领导02' },
            ]}
        />
        <ProFormSelect
            width='sm'
            name='department2'
            label='问题指派2'
            options={[
              { value: '1', label: '部门01' },
              { value: '2', label: '部门02' },
            ]}
        />
      </ProForm.Group>
    </ModalForm>

    <FooterToolbar>
      {
        radioValue === 1
            ? <Button type={'primary'} onClick={() => message.success('将上述临时问题派发给各负责部门')}>问题指派</Button>
            : <Button type={'primary'} onClick={() => message.success('将上述临时问题上报给党委审批')}>上报审批</Button>
      }
    </FooterToolbar>

  </PageContainer>;
}

