import React from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { useSearchParams } from 'react-router-dom';
import { Alert, Button, Descriptions } from 'antd';
import showInfo from '../../utils/showInfo';
import BaseEditableTable from '../../components/BaseEditableTable';

function Score() {

  const [search] = useSearchParams();
  let isLeader = search.get('isLeader') === 'true';

  const columns: ProColumns[] = [
    { title: '序号', dataIndex: 'id', width: 80, editable: false },
    { title: '考评模块', dataIndex: 'type', editable: false },
    { title: '考核指标', dataIndex: 'indicator', editable: false },
    {
      title: '考评内容',
      dataIndex: 'content',
      editable: false,
      renderText: text => <>
        {text?.substring(0, 20)}
        {text?.length > 20 && <Button type={'link'} onClick={() => showInfo(text)}>...[更多]</Button>}
      </>,
    },
    {
      title: '系统评价要素',
      dataIndex: 'factor',
      editable: false,
      renderText: (text, record) => record.isColor
          ? <div style={{ color: 'red' }}>
            {text?.substring(0, 20)}
            {text?.length > 20 &&
                <Button type={'link'} onClick={() => showInfo(text)} style={{ color: 'red' }}>...[更多]</Button>}
          </div>
          : <>
            {text?.substring(0, 20)}
            {text?.length > 20 && <Button type={'link'} onClick={() => showInfo(text)}>...[更多]</Button>}
          </>
    },
    { title: '分值', dataIndex: 'score', width: 80, editable: false },
    { title: '考评权重', dataIndex: 'weight', renderText: () => '20%', editable: false },
    { title: '考评得分', dataIndex: 'target', width: 100 },
  ];

  // 测试数据
  const data = [
    {
      id: 1,
      type: '明责评价',
      indicator: '”1+X“专题会议（部分系统评分）',
      content: '依据班子成员“一岗双责”及其下位责任实际，按要求参加及召开“1+X”会议，分析分管、联系及负责领域、分管基层站所等全面从严治党形势任务、问题风险，以及“七张问题清单”状况，明晰各方职责任务，研究解决履责突出问题，推进各方职责任务调整、完善及有效落实。',
      factor: '按规定次数（全年4次）、规定时间（每季度次月10日前）参加并提交审核通过职责任务、工作进展等。每少参加1次扣0.5分，未提交审核通过职责任务、工作进展的，每次扣0.5分，每已超过规定时间（即每季度次月15日前）提交审核通过职责任务、工作进展的1次扣0.2分，以上扣分按80%权重折算。分管领域、站所按其扣分情况按20%权重折算（分管多个站所的按比例分派，下同）。',
      score: 4,
    },
    {
      id: 13,
      type: '履责评价',
      isColor: true,
      indicator: '民主（组织）生活会（督导）（纯党委评分）',
      content: '班子成员按照区（镇）领导班子民主生活会要求，聚焦主题，认真开展理论学习、征求意见建议、相互谈心谈话、高质量撰写发言提纲、严肃开展批评和自我批评、主动做好相关问题情况说明、抓好问题整改落实。按照组织生活会督导要求，指导参加联系村（社）组织生活会，带领督导组抓好会前检查、会中指导、会后评估及跟进查摆问题整改工作。',
      factor: '未认真撰写发言提纲、严肃开展批评与自我批评、主动做好相关问题情况说明、抓好整改问题落实的，每次扣1分；未认真指导参加联系村（社）组织生活会、抓好检查指导评估及督促落实整改的，每次扣1分。',
      score: 2,
    }
  ];

  const [value, setValue] = React.useState([]);
  React.useEffect(() => setValue(data), []);

  // 求总分
  const [count, setCount] = React.useState<number>(0);
  const getTotal = (array: any, keyName: string) => {
    let total = 0;
    total = array.reduce(function (total, currentValue) {
      return currentValue[keyName] ? (total + parseFloat(currentValue[keyName])) : total;
    }, 0);
    return total;
  }

  return <PageContainer>
    <Alert type={'warning'} message={'注：每项所填考评得分不得超过该项总分值'} showIcon />
    <br />
    <BaseEditableTable
        columns={isLeader ? columns : columns.filter(item => item.dataIndex !== 'weight')}
        value={value}
        isInEdit
        disableAdd
        isOnlyEdit
        onChange={(v) => {
          setValue(v);
          setCount(getTotal(v, 'target'));
        }}
    />
    <br />
    <Descriptions bordered>
      <Descriptions.Item
          label='总得分'
          labelStyle={{ width: '86%', fontSize: 16 }}
          contentStyle={{ textAlign: 'center', backgroundColor: '#FAFAFA', fontSize: 16 }}
      >
        {count.toFixed(2)}
      </Descriptions.Item>
    </Descriptions>

    <FooterToolbar>
      {/* todo post */}
      <Button type={'primary'} onClick={() => console.log(value)}>提交</Button>
      <Button onClick={() => window.location.reload()}>取消</Button>
    </FooterToolbar>
  </PageContainer>;
}

export default Score;