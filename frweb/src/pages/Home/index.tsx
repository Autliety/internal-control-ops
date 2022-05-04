import React from 'react';
import { Avatar, Button, Col, List, Row, Statistic, Upload } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

import PieChart from './PieChart';

import { UploadOutlined } from '@ant-design/icons';
import { host } from '../../utils/request';


export default function Home() {

  const announceData = [
    {
      id: 1,
      title: '计划未制定',
      content: '【考核指标0001】尚未制定相关的工作计划',
    },
    {
      id: 2,
      title: '工作进度汇报已逾期',
      content: '【工作计划A】已逾期，但尚未汇报进度',
    },
  ];

  const props = {
    name: 'file',
    action: 'http://localhost:8082/file/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
    },
  };

  const filename = 'testfile.png';

  return <div>
    <PageContainer
        title="百步镇政府四责协同管理平台"
        subTitle={'首页'}
        content={
          <Statistic title="欢迎您" value={'管理员'} />
        }
    >
      <List
          className="content"
          header="消息通知"
          itemLayout="horizontal"
      >
        {announceData.map((item, index) =>
            <List.Item
                key={index}
                style={{ cursor: 'pointer' }}
            >
              <List.Item.Meta
                  avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png" />}
                  title={item['title']}
                  description={item['content']}
              />
            </List.Item>)
        }
      </List>
      <br />
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="content">
            <PieChart title={'年度考核考评情况'} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="content">
            <PieChart title={'本月考核指标与计划'} />
          </div>
        </Col>
      </Row>

      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>

      <Button onClick={() => {
        window.location.href = host + `/file/download/${filename}`;
      }}
      >
        click to download
      </Button>
    </PageContainer>


  </div>;
}

