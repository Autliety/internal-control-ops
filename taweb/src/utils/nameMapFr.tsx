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
  1: { name: '约谈', title: '具体问题', label: '整改措施' },
  2: { name: '提醒谈话', title: '具体问题', label: '整改措施' },
};

export const meetingStatusEnum = {
  AWAITING_REVIEW: <Tag color={'warning'}>待审</Tag>,
  REVIEWED: <Tag color={'processing'}>会前准备</Tag>,
  FINISHED: <Tag color={'success'}>已结束</Tag>,
};

export const statusEnum = {
  NONE_REVIEW: <Tag color={'default'}>未完成</Tag>,
  AWAITING_REVIEW: <Tag color={'warning'}>待审</Tag>,
  REVIEWED: <Tag color={'processing'}>已审核</Tag>,
  FINISHED: <Tag color={'success'}>已完成</Tag>,
};

// 权限类别
export const permissionTypeFr = {
  MEETING: '会议权限',
  MATTER: '问题权限',
  RESPONSIBILITY: '职责任务权限',
  MEASURE: '措施权限',
  DYNAMIC: '履责登记和动态跟踪权限',
  LEARNING: '第一议题学规学记权限',
  REFORM: '整改权限',
  TEMPORARY: '监督检查权限',
  DISPOSAL: '第一种形态处置运用权限',
  INFORM: '一单三书权限',
  MOTION: '纪委动议权限',
  REPORT: '履责报告权限',
  IMPORT: '重大事项请示报告权限',
  RISK: '廉政风险排查防控权限',
  APPRAISAL: '履责考评权限',
  QUESTION: '履责约谈权限',
}