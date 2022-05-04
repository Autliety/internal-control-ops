
// 审批
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