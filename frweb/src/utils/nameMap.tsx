// 审批
import { Tag } from 'antd';

export const approveProcessStatus = {
  WAITING: { label: '进行中', tag: 'processing' },
  FINISHED: { label: '已完成', tag: 'success' },
  CANCEL: { label: '已取消', tag: 'default' },
  DENIED: { label: '已拒绝', tag: 'error' },
};

export const approveProcessNodeStatus = {
  PENDING: { label: '未开始', tag: 'default' },
  WAITING: { label: '等待审批', tag: 'warning' },
  DONE: { label: '已完成', tag: 'success' },
  DENIED: { label: '已拒绝', tag: 'error' },
  CANCEL: { label: '已取消', tag: 'default' },
};

// 会议
export const meetingType = {
  1: '’1‘专题会议',
  2: '’X‘专门会议',
  3: '纪委动议',
};

// 一单三书
export const informType = {
  COPY: { name: '抄告单', title: '问题内容', label: '整改措施' },
  OPINION: { name: '意见书', title: '意见内容', label: '整改措施' },
  ADVICE: { name: '建议书', title: '建议内容', label: '防范措施' },
  ANNOUNCE: { name: '第一种形态告知书', title: '具体问题', label: '整改措施' },
};

export const meetingStatusEnum = {
  AWAITING_REVIEW: <Tag color={'warning'}>待审</Tag>,
  REVIEWED: <Tag color={'processing'}>会前准备</Tag>,
  FINISHED: <Tag color={'success'}>已结束</Tag>,
};

export const statusEnum = {
  AWAITING_REVIEW: <Tag color={'warning'}>待审</Tag>,
  REVIEWED: <Tag color={'processing'}>已审核</Tag>,
  FINISHED: <Tag color={'success'}>已完成</Tag>,
};
