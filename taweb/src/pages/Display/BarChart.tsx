import React from 'react';
import { Bar } from '@ant-design/charts';
import Title from './Title';

function BarChart() {

  const data = [
    { name: '赵小龙', value: 38 },
    { name: '吴胜杰', value: 45 },
    { name: '蔡耀明', value: 75 },
    { name: '王哲', value: 52 },
    { name: '姜利明', value: 45 },
    { name: '李勤根', value: 52 },
    { name: '沈潇雅', value: 38 },
    { name: '范郭真', value: 52 },
    { name: '吴肖锋', value: 56 },
    { name: '朱世鹏', value: 23 },
    { name: '董佳浩', value: 38 },
    { name: '张陆军', value: 70 },
    { name: '李均敬', value: 38 },
    { name: '潘其华', value: 52 },
    { name: '王玲敏', value: 45 },
    { name: '沈伟华', value: 52 },
    { name: '姚晨雪', value: 56 },
    { name: '叶吴良', value: 52 },
    { name: '叶锋', value: 38 },
    { name: '沈鹏', value: 54 },
    { name: '蒋爱君', value: 38 },
    { name: '赵生良', value: 52 },
    { name: '张明', value: 45 },
    { name: '张陆君', value: 52 },
    { name: '刘爱群', value: 38 },
    { name: '唐慧平', value: 56 },
  ];
  const config = {
    data,
    height: 600,
    xField: 'value',
    yField: 'name',
    seriesField: 'name',
    legend: {
      position: 'top-left',
      title: { text: '姓名', spacing: 8, style: { fill: '#fff' } },
      itemName: { style: { fill: '#fff', fontSize: 14 } },
    },
    label: {
      position: 'right',
      style: {
        fill: '#fff',
        fontSize: 14,
      },
    },
    xAxis: {
      label: {
        style: { fill: '#fff' }
      }
    },
    yAxis: {
      label: {
        style: { fill: '#fff' }
      }
    }
  };

  return <div>
    <Title title={'得分情况'} />
    {/*@ts-ignore*/}
    <Bar {...config} />
  </div>;
}

export default BarChart;