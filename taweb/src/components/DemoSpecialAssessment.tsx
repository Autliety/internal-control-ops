import React from 'react';
import { Button } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import BaseEditableTable from './BaseEditableTable';
import showInfo from '../utils/showInfo';

export default function DemoSpecialAssessment({ dataIndex }: any) {

  const columns: ProColumns[] = [
    { title: '编号', dataIndex: 'code' },
    { title: '指标分类', dataIndex: 'type' },
    {
      title: '指标细则', dataIndex: 'name',
      renderText: text => text
          ? <>
            {text.substring(0, 30) + '...'}
            {text.length > 30 && <Button type={'link'} onClick={() => showInfo(text)}>[更多]</Button>}
          </>
          : '无',
    },
    { title: '权重分值', dataIndex: 'point' },
    { title: '责任站办', dataIndex: 'dept' },
    { title: '更新时间', dataIndex: 'updateTime' },
  ];

  const data = [
    { code: 'FZ001', type: '党领导人大工作', name: '对人大代表意见建议不及时正确办理，造成负面影响', point: '-0.5', dept: '人大办' },
    { code: 'FZ002', type: '党领导人大工作', name: '对人大监督事项不正确及时办理', point: '-0.5', dept: '人大办' },
    {
      code: 'FZ003', type: '党领导人大工作',
      name: '对《中共中央关于新时代坚持和完善人民代表大会制度加强和改进人大工作的意见》和《县委关于推进新时代人大工作高质量发展》文件中相关事项落实不到位',
      point: '-0.5',
      dept: '人大办',
    },
    { code: 'FZ004', type: '全面深化改革工作', name: '改革任务不落实', point: '-0.25', dept: '党政办' },
    { code: 'FZ005', type: '全面深化改革工作', name: '改革工作流于形式，造成负面影响', point: '-0.25', dept: '党政办' },
  ];

  const data2 = [
    { code: 'TZ001', type: '中央级媒体', name: '《人民日报》其他版面、中央电视台各类新闻栏目', point: '+0.5', dept: '县委宣传部' },
    { code: 'TZ002', type: '省/市级媒体', name: '《浙江日报》头版头条、浙江卫视《新闻联播》头条', point: '+1', dept: '县委宣传部' },
    { code: 'TZ003', type: '省/市级媒体', name: '《浙江日报》头版、浙江卫视《新闻联播》', point: '+0.5', dept: '县委宣传部' },
  ]

  return <>
    <BaseEditableTable
        columns={columns}
        value={dataIndex === 2 ? data2 : data}
    />
  </>;
}