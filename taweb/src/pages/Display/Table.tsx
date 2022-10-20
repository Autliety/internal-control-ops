import React from 'react';
import { TableSheet } from '@antv/s2';
import Title from './Title';

function Table() {

  React.useEffect(() => {
    const container = document.getElementById('container');
    const s2Options = {
      width: 810,
      height: 360,
      showSeriesNumber: false,
      conditions: {
        text: [
          {
            field: 'status',
            mapping(fieldValue, data) {
              return {
                // fill 是文本字段标记下唯一必须的字段，用于指定文本颜色
                fill: '#40ef19',
              };
            },
          },
        ],
      },
    };

    const s2DataConfig = {
      fields: {
        columns: ['content', 'date', 'status'],
      },
      meta: [
        { field: 'content', name: '拟提交内容' },
        { field: 'date', name: '决策时间' },
        { field: 'status', name: '决策状态' },
      ],
      data: [
        { id: 1, date: '2022-06-05', content: '横港村副书记俞惠飞违纪案', status: '已完成' },
        { id: 2, date: '2022-06-05', content: '横港村党委书记钱伟斌违纪案', status: '已完成' },
        { id: 3, date: '2022-06-05', content: '沈伟佳参加工作时间认定', status: '已完成' },
        { id: 4, date: '2022-06-05', content: '党员发展', status: '已完成' },
        { id: 5, date: '2022-06-05', content: '党费使用', status: '已完成' },
        { id: 6, date: '2022-06-05', content: '百步镇2022年下半年征兵初定兵工作', status: '已完成' },
        { id: 7, date: '2022-06-05', content: '党员发展', status: '已完成' },
        { id: 8, date: '2022-06-05', content: '党费使用', status: '已完成' },
        { id: 9, date: '2022-06-05', content: '百步镇2022年下半年征兵初定兵工作', status: '已完成' },
        { id: 10, date: '2022-06-05', content: '党员发展', status: '已完成' },
        { id: 11, date: '2022-06-05', content: '党费使用', status: '已完成' },
        { id: 12, date: '2022-06-05', content: '百步镇2022年下半年征兵初定兵工作', status: '已完成' },
        { id: 13, date: '2022-06-05', content: '党员发展', status: '已完成' },
        { id: 14, date: '2022-06-05', content: '党费使用', status: '已完成' },
        { id: 15, date: '2022-06-05', content: '百步镇2022年下半年征兵初定兵工作', status: '已完成' },
      ],
    };
    const s2 = new TableSheet(container, s2DataConfig, s2Options);

    s2.setThemeCfg({
      theme: {
        dataCell: {
          cell: {
            crossBackgroundColor: '#3e5586',
            backgroundColor: '#1F2E4D',
            backgroundColorOpacity: 0.8,
          },
          text: { fill: '#fff', textAlign: 'center' },
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