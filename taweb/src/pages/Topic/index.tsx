import React from 'react';
import { Button, Divider } from 'antd';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import TopicInfo from './TopicInfo';
import MeetingContent from './TopicContent';
import TopicTask from './TopicTask';

export default function Topic() {

  //测试数据
  const data: any = {
    id: 1,
    principal: '妇联',
    meetingUser: '王哲',
    startTime: '2021-12-21',
    placement: '会议室202',
    content: [
      { id: 1, content: '讨论研究百步镇‘十四五”农村生活污水治理工作实施方案' },
      { id: 2, content: '讨论研究百步镇城乡公益性岗位扩容提质行动实施方案' },
    ],
    task: [
      {
        id: 1,
        task: '各级各相关部门要进一步统一思想、提高站位，切实做好农村生活污水治理工作。项目建设单位要全面负责治理方案确定、施工进度' +
            '把控以及施工质量保障等工作。各镇街作为治理工作的责任主体，要会同建设单位做好现场施工、后续运维等相关工作。'
      },
      {
        id: 2,
        task: '各相关部门和单位要高度重视，严格按照《实施方案》要求做好各自承担的工作。人社局要发挥好牵头抓总作用，会同相关部门抓紧' +
            '做好我镇安置对象范围的认定和岗位设置工作。民政局对退出公益性岗位后生活困难人员，要按规定纳入社会救助范围，做到政策有效衔接、帮扶' +
            '不断。'
      },
    ]
  };

  const [search] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let isCreate = search.get('create') === 'true';

  const [isEdit, setIsEdit] = React.useState(false);
  const [infoData, setInfoData] = React.useState(isCreate ? {} : data);
  const [taskData, setTaskData] = React.useState(isCreate ? [] : data.task);
  const [contentData, setContentData] = React.useState(isCreate ? [] : data.content);

  return <PageContainer
      title={'议题信息'}
  >
    <Divider orientation={'left'}>会议信息</Divider>
    <TopicInfo
        isEdit={isEdit || isCreate}
        data={infoData}
        onChange={setInfoData}
    />

    <Divider orientation={'left'}>议题内容概述</Divider>
    <MeetingContent
        isEdit={isEdit || isCreate}
        data={contentData}
        onChange={setContentData}
    />

    <Divider orientation={'left'}>职责任务概述</Divider>
    <TopicTask
        isEdit={isEdit || isCreate}
        data={taskData}
        onChange={setTaskData}
    />

    <FooterToolbar>
      {
          (isEdit || isCreate) || <Button
              type={'primary'}
              onClick={() => setIsEdit(true)}
          >
            编辑
          </Button>
      }

      {
          (isEdit || isCreate) && <Button
              onClick={() => {
                setIsEdit(b => !b);
                navigate(isCreate ? '/v2/d' : pathname);
              }}
          >
            取消
          </Button>
      }

      {
          (isEdit || isCreate) && <Button
              type={'primary'}
              onClick={() => {
                console.log(infoData);
                setIsEdit(false);
              }}
          >
            保存
          </Button>
      }
    </FooterToolbar>

  </PageContainer>;
}