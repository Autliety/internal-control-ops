import React from 'react';
import { TableSheet, S2Event } from '@antv/s2';
import Title from './Title';

function Table() {

  // 每次滚动的距离
  const STEP = 50;

  // 每次滚动间隔时间
  const MS = 3000;

  // 计时器
  let timer;

  function addScrollButton(s2) {

    // 如果没有纵向滚动条则不需要触发定时器
    if (!s2.facet.vScrollBar) {
      return;
    }
    // 如果需要快速滚动, 可将 setInterval 替换成 requestAnimationFrame
    timer = setInterval(() => {
      // 获取当前 Y 轴滚动距离
      const { scrollY } = s2.facet.getScrollOffset();
      // 如果已经滚动到了底部，则回到顶部
      if (s2.facet.isScrollToBottom(scrollY)) {
        s2.updateScrollOffset({
          offsetY: {
            value: 0,
            animate: false,
          },
        });
        return;
      }
      s2.updateScrollOffset({
        offsetY: {
          value: scrollY + STEP,
          animate: true,
        },
      });
    }, MS)
  }

  React.useEffect(() => {
    const container = document.getElementById('container');
    const box = document.getElementById('box');

    const s2Options = {
      width: 600,
      height: 340,
      showSeriesNumber: false,
      conditions: {
        text: [
          {
            field: 'status',
            mapping(fieldValue, data) {
              return { fill: '#40ef19' };
            },
          },
        ],
      },
      style: {
        cellCfg: {
          height: 50
        }
      }
    };

    const s2Options2 = {
      width: 200,
      height: 360,
      showSeriesNumber: false,
      conditions: {
        text: [
          {
            field: 'status',
            mapping(fieldValue, data) {
              return { fill: '#40ef19' };
            },
          },
        ],
      },
      style: {
        cellCfg: {
          height: 50
        }
      }
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

    const s2DataConfig2 = {
      fields: {
        columns: ['name', 'count'],
      },
      meta: [
        { field: 'name', name: '类别' },
        { field: 'count', name: '数量' },
      ],
      data: [
        { id: 1, name: '三重一大', count: 18 },
        { id: 2, name: '5+1谈话', count: 10 },
        { id: 3, name: '相互监督提醒', count: 15 },
        { id: 4, name: '履责情况', count: 9 },
        { id: 5, name: '述责述廉评议', count: 18 },
        { id: 6, name: '民主生活会督导', count: 17 },
      ],
    };
    const s2 = new TableSheet(container, s2DataConfig, s2Options), s22 = new TableSheet(box, s2DataConfig2, s2Options2);

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

    s22.setThemeCfg({
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

    s2.on(S2Event.LAYOUT_DESTROY, () => {
      clearInterval(timer);
    });

    s2.render();
    s22.render();

    addScrollButton(s2);
  }, []);

  return <div>
    <Title title={'三重一大数据展示'} />

    <div style={{ display: 'flex' }}>
      <div id={'container'} style={{ marginRight: 10 }}>

      </div>
      <div id={'box'}>

      </div>
    </div>

  </div>;
}

export default Table;