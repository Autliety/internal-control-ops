import React from 'react';
import { PageContainer } from "@ant-design/pro-layout";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import BaseEditableTable from "../../components/BaseEditableTable";
import { ProColumns } from "@ant-design/pro-table";
import { Button, Card } from "antd";
import showInfo from "../../utils/showInfo";

export default function StaffPerformance() {

  const navigate = useNavigate();

  const columns: ProColumns[] = [
    { title: '序号', dataIndex: 'id' },
    { title: '考核指标', dataIndex: 'indicator' },
    { title: '分值', dataIndex: 'count', width: 100, align: 'center' },
    {
      title: '考评内容',
      dataIndex: 'content',
      renderText: text => <>
        {text.substring(0, 40) + '...'}
        {text.length > 40 && <Button type={'link'} onClick={() => showInfo(text)}>[更多]</Button>}
      </>,
    },
    {
      title: '数据要点',
      dataIndex: 'point',
      renderText: text => <>
        {text.substring(0, 40) + '...'}
        {text.length > 40 && <Button type={'link'} onClick={() => showInfo(text)}>[更多]</Button>}
      </>,
    },
    {
      title: '考评得分',
      dataIndex: 'value',
      width: 100,
      align: 'center',
    }
  ];

  const data = [
    {
      id: 1,
      content: `依据“一岗双责”及其下位责任实际，按要求参加及召开“1+X”会议，分析分管、联系及负责领域、办所（中心）、条线等全面从严治党形势
      任务、问题风险，以及“七张问题清单”状况，明晰各方职责任务，研究解决履责突出问题，推进各方职责任务调整、完善及有效落实。`,
      count: 4,
      indicator: `“1+X”会议部署、推进`,
      point: `是否参加“1+X”会议：取表单“1”和“X”专项会议中参会人员表中的人名；“x”会议有多次但不确定数量，每次都取，少1次按比例扣分`,
      value: 3.5,
    }
  ];

  return <PageContainer
      title={<><ArrowLeftOutlined onClick={() => navigate(-1)}/> 考评详情</>}
  >

    <Card title="被考评人" bordered={false}>
      <p>姓名：王哲</p>
      <p>部门：党委</p>
      <p>岗位：党委副书记</p>
    </Card>
    <br/>

    <BaseEditableTable columns={columns} value={data}/>

  </PageContainer>;
};