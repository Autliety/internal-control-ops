import { Tag } from 'antd';

export const statusEnum = {
  NONE_REVIEW: <Tag color={'default'}>未完成</Tag>,
  AWAITING_REVIEW: <Tag color={'warning'}>待审</Tag>,
  REVIEW_DENIED: <Tag color={'error'}>已退回</Tag>,
  AWAITING_FIX: <Tag color={'processing'}>修改中</Tag>,
  FIXED: <Tag color={'success'}>已修改</Tag>,
  REVIEWED: <Tag color={'success'}>已审核</Tag>,
  FINISHED: <Tag color={'success'}>已完成</Tag>,
};

// 权限类别
export const permissionTypeTa = {
  ASSESSMENT: '考核指标相关权限',
  PLAN: '工作计划相关权限',
  TASK: '工作进度相关权限',
  APPRAISAL: '考评相关权限',
  WALL: '回音壁相关权限',
};




