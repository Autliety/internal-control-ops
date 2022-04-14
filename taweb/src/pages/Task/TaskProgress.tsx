import React from 'react';
import { Button, Col, Row } from 'antd';
import ProDescriptions from '@ant-design/pro-descriptions';
import valueTypeMap from '../../utils/valueTypeMap';
import { DownloadOutlined } from '@ant-design/icons';

export default function TaskProgress({ dataSource }) {
  return <>
    {
      dataSource?.map((item, index) => <div key={index}>
        <Row className={'content'}>
          <Col span={8}>
            <ProDescriptions title={item.planDetail.name} column={1} >

              <ProDescriptions.Item label="措施目标">
                {valueTypeMap(item.planDetail.value, item.planDetail.valueType)}
              </ProDescriptions.Item>

              <ProDescriptions.Item label="当前进度">
                {valueTypeMap(item.value, item.planDetail.valueType)}
              </ProDescriptions.Item>

              <ProDescriptions.Item key='progress-bar' valueType="progress">
                {40}
              </ProDescriptions.Item>


            </ProDescriptions>
          </Col>
          <Col span={16}>
            <ProDescriptions
                column={1}
                extra={<Button type={'primary'} icon={<DownloadOutlined />}>下载</Button>}
            >
              <ProDescriptions.Item label="措施描述" valueType={'text'}>
                {item.planDetail.remark}
              </ProDescriptions.Item>

              <ProDescriptions.Item label="进度描述">
                {item.remark}
              </ProDescriptions.Item>
            </ProDescriptions>
          </Col>
        </Row>
        <br />
      </div>)
    }
  </>;
}