import React from 'react';
import { Button, Col, Modal, Row, Steps, Tooltip, Typography } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { BetaSchemaForm, ProForm } from '@ant-design/pro-components';
import BaseDescriptions from './BaseDescriptions';

type Props = {
  title: string,
  isFirstEdit?: boolean,
  // 是否第一步需要审批
  isApproval?: boolean,
  onFinish: any,
  formConfig: any,
  value?: any,
  size?: 'small' | 'middle' | 'large',
  stepInDisabled?: boolean
}

function BaseStepForm({ isFirstEdit = true, stepInDisabled = false, ...props }: Props) {

  const { Step } = Steps;

  const [isVisible, setIsVisible] = React.useState(false);
  // 当前步骤
  const currentStep = props.value?.integer1 ?? 0;
  // 查看已填写信息的步骤
  const [step, setStep] = React.useState<number>(props.value?.integer1 ?? 0);
  React.useEffect(() => {
    setStep(props.value?.integer1 ?? 0);
  }, [props.value]);

  return <>
    {
      isFirstEdit
          ? <Button type={'primary'} onClick={() => setIsVisible(true)} icon={<PlusOutlined />}>{props.title}新建</Button>
          : <Tooltip title={'继续填写'}>
            {
              props.size
                  ? <Button
                      disabled={
                        stepInDisabled ||
                        props.isApproval
                            // 审批状态
                            ? (currentStep === Object.keys(props.formConfig).length)
                            : (currentStep === Object.keys(props.formConfig).length)
                      }
                      type={'primary'}
                      onClick={() => setIsVisible(true)}
                      icon={<EditOutlined />}
                      size={'middle'}
                  >
                    继续填写
                  </Button>
                  : <Button
                      disabled={stepInDisabled ||
                      props.isApproval
                          // 审批状态
                          ? (currentStep === Object.keys(props.formConfig).length)
                          : (currentStep === Object.keys(props.formConfig).length)
                      }
                      type={'primary'}
                      onClick={() => setIsVisible(true)}
                      icon={<EditOutlined />}
                      size={'small'}
                  />
            }
          </Tooltip>
    }
    <Modal
        visible={isVisible}
        width={1000}
        title={props.title}
        footer={null}
        onCancel={() => setIsVisible(false)}
    >

      <Row>
        <Col span={5}>
          <Steps
              progressDot
              current={step}
              onChange={v => setStep(v)}
              direction='vertical'
          >
            {
              Object.values(props.formConfig)?.map((item: any, index) => <Step
                  key={index}
                  title={item?.title}
                  // disabled={index > currentStep}
              />)
            }
          </Steps>
        </Col>
        <Col span={19}>
          {
            step === currentStep
                ? <>
                  <Typography.Title level={5}>{props.formConfig[currentStep]?.title + '填写'}</Typography.Title>
                  <br />
                  <ProForm
                      onFinish={async (values) => props.onFinish(values)}
                  >
                    <BetaSchemaForm
                        initialValues={props.value}
                        layoutType='Embed'
                        columns={props.formConfig[currentStep]?.columns}
                    />
                  </ProForm>
                </>
                : <BaseDescriptions
                    columns={props.formConfig[step]?.columns}
                    dataSource={props.value}
                    column={1}
                />
          }
        </Col>
      </Row>
      <br />
    </Modal>
  </>;
}

export default BaseStepForm;