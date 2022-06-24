import { Tag } from 'antd';

export const statusEnumOrigin = {
  NONE_REVIEW: { label: '未提交', tag: 'default' },
  AWAITING_REVIEW: { label: '待审核', tag: 'warning' },
  REVIEWED: { label: '审核完成', tag: 'processing' },
  REVIEW_DENIED: { label: '退回修改', tag: 'error' },
  FINISHED: { label: '已完成', tag: 'success' },
};

export const statusEnum = {
  NONE_REVIEW: <Tag color={'default'}>未完成</Tag>,
  AWAITING_REVIEW: <Tag color={'warning'}>待审</Tag>,
  REVIEWED: <Tag color={'processing'}>已审核</Tag>,
  FINISHED: <Tag color={'success'}>已完成</Tag>,
};

// 权限类别
export const permissionType = {
  ASSESSMENT: '考核指标相关权限',
  PLAN: '工作计划相关权限',
  TASK: '工作进度相关权限',
  APPRAISAL: '考评相关权限',
  WALL: '回音壁相关权限',
};




