import React from 'react';
import { TableSheet } from '@antv/s2';
import Title from './Title';

function Table() {

  React.useEffect(() => {
    const container = document.getElementById('container');
    const s2Options = {
      width: 810,
      height: 390,
      showSeriesNumber: true,
    };

    const s2DataConfig = {
      fields: {
        columns: ['name', 'content', 'status'],
      },
      meta: [
        { field: 'name', name: '一岗双责' },
        { field: 'content', name: '拟提交内容' },
        { field: 'status', name: '决策状态' },
      ],
      data: [
        { id: 1, name: '李勤根', content: '横港村副书记俞惠飞违纪案', status: '已完成' },
        { id: 2, name: '李勤根', content: '横港村党委书记钱伟斌违纪案', status: '已完成' },
        { id: 3, name: '沈潇雅', content: '沈伟佳参加工作时间认定', status: '已完成' },
        { id: 4, name: '沈潇雅', content: '党员发展', status: '已完成' },
        { id: 5, name: '沈潇雅', content: '党费使用', status: '已完成' },
        { id: 6, name: '董佳浩', content: '百步镇2022年下半年征兵初定兵工作', status: '已完成' },
        { id: 7, name: '沈潇雅', content: '党员发展', status: '已完成' },
        { id: 8, name: '沈潇雅', content: '党费使用', status: '已完成' },
        { id: 9, name: '董佳浩', content: '百步镇2022年下半年征兵初定兵工作', status: '已完成' },
        { id: 10, name: '沈潇雅', content: '党员发展', status: '已完成' },
        { id: 11, name: '沈潇雅', content: '党费使用', status: '已完成' },
        { id: 12, name: '董佳浩', content: '百步镇2022年下半年征兵初定兵工作', status: '已完成' },
        { id: 13, name: '沈潇雅', content: '党员发展', status: '已完成' },
        { id: 14, name: '沈潇雅', content: '党费使用', status: '已完成' },
        { id: 15, name: '董佳浩', content: '百步镇2022年下半年征兵初定兵工作', status: '已完成' },
      ],
    };
    const s2 = new TableSheet(container, s2DataConfig, s2Options);

    s2.setThemeCfg({
      theme: {
        rowCell: {
          cell: { backgroundColor: '#1F2E4D', backgroundColorOpacity: 0.8 },
        },
        dataCell: {
          cell: {
            crossBackgroundColor: '#3e5586',
            backgroundColor: '#1F2E4D',
            backgroundColorOpacity: 0.8,
          },
          text: { fill: '#fff' },
        },
        background: { color: '#1F2E4D', opacity: 0 },
      },
    })

    s2.render();
  }, []);

  return <div>
    <Title title={'三重一大数据展示'} />
    <div id={'container'}>

    </div>
  </div>;
}

export default Table;