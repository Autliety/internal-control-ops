// 资产
export const assetLabel = {
  name: '资产名称',
  code: '资产编号',
  assetType_fullName: '资产分类',
  spec: '品牌规格',
  status: '状态',
  remark: '描述',
  value: '原值',
  taxValue: '税费',
  netValue: '摊销（¥）',
  startDate: '开始使用日期',
  placement: '存放地点',
  belongOrg_fullName: '所属单位',
  belongUser_name: '责任人',
  usingOrg_fullName: '使用单位',
  usingUser_name: '使用人',
  originCode: '原编码',
};

export const statusEnum = {
  PENDING: '待审',
  UNUSED: '闲置',
  IN_USING: '在用',
  SCRAPPED: '报废',
  CLEANED: '已清理',
};

export const statusTags = {
  PENDING: 'warning',
  UNUSED: 'default',
  IN_USING: 'processing',
  SCRAPPED: 'error',
  CLEANED: 'default',
};

export const basicFormStatus = {
  WAITING: { label: '待选择领用资产', tag: 'warning' },
  PENDING: { label: '等待审批', tag: 'processing' },
  DONE: { label: '已完成', tag: 'success' },
  DENIED: { label: '已拒绝', tag: 'error' },
};

// 财务
export const financialLabel = {
  value: '原值（¥）',
  taxValue: '税费（¥）',
  netValue: '摊销（¥）',
  financialCode: '财务编码',
  originCode: '原编码',
  financialRemark: '财务备注',
  salvageRate: '残值率',
  depreciation: '折旧方式',
  period: '折旧期数',
  confirmUser_name: '审核人',
  confirmTime: '审核时间',
};

// 出租
export const rentLabel = {
  name: '资产名称',
  code: '资产编号',
  type: '资产分类',
  status: '状态',
  space: '面积（平方米）',
  startDate: '开始租赁日期',
  endDate: '结束租赁日期',
  updateDate: '最后更新日期',
  placement: '地点',
  organization_fullName: '所属单位',
  user_name: '责任人',
  remark: '备注',
};

export const rentStatusEnumOrigin = {
  PENDING: '待租',
  IN_RENT: '出租中',
  REPAIR: '维修中',
  STOPPED: '停止出租',
};

export const rentStatusEnum = {
  PENDING: { label: '待租', tag: 'warning' },
  IN_RENT: { label: '出租中', tag: 'processing' },
  REPAIR: { label: '维修中', tag: 'default' },
  STOPPED: { label: '停止出租', tag: 'error' },
};

// 合同
export const leaseLabel = {
  name: '合同名称',
  code: '合同编号',
  status: '合同状态',
  organization_fullName: '所属单位',
  user_name: '负责人',
  setupDate: '订立日期',
  startDate: '开始日期',
  endDate: '结束日期',
  paymentType: '支付方式',
  payment: '付款额度',
  deposit: '押金',
  clientName: '承租人',
  clientPhone: '承租人联系方式',
  clientCompany: '承租人单位',
  clientTaxCode: '承租人税号',
  remark: '备注',
  rent: '关联资产',
  nextPaymentDate: '下次付款日期',
};

export const leaseStatusEnum = {
  PENDING: { label: '待生效', tag: 'warning' },
  PROCESSING: { label: '执行中', tag: 'processing' },
  DONE: { label: '已结束', tag: 'success' },
  STOPPED: { label: '停止执行', tag: 'error' },
};

export const leaseStatusEnumOrigin = {
  PENDING: '待生效',
  PROCESSING: '执行中',
  DONE: '已结束',
  STOPPED: '停止执行',
};

export const paymentType = {
  FREE: '免租',
  TOTAL: '一次付清',
  ANNUAL: '年付',
  HALF_ANNUAL: '半年付',
  QUARTER: '季付',
  MONTHLY: '月付',
};

// 收款记录

export const rentType = {
  RENT: '租金',
  MAINTENANCE: '维修费',
  DEPOSIT: '押金',
  COMPENSATION: '赔偿款',
  OTHER: '其他',
};

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

// 采购
export const purchaseListStatus = {
  WAITING: { label: '待审批', tag: 'warning' },
  PENDING: { label: '待采购', tag: 'default' },
  PURCHASED: { label: '待收货', tag: 'processing' },
  DONE: { label: '已验收', tag: 'success' },
  DENIED: { label: '已拒绝', tag: 'error' },
  CANCELED: { label: '已取消', tag: 'default' },
};

export const purchaseStep = {
  WAITING: '1',
  PENDING: '2',
  PURCHASED: '3',
  DONE: '4',
};

// 盘点
export const countingStatus = {
  WAITING: { label: '进行中', tag: 'processing' },
  DONE: { label: '已完成', tag: 'success' },
  CANCEL: { label: '已取消', tag: 'error' },
}


// 权限类别
export const permissionType = {
  ASSESSMENT: '考核指标相关权限',
  PLAN: '工作计划相关权限',
  TASK: '工作进度相关权限',
  APPRAISAL: '考评相关权限',
  WALL: '回音壁相关权限',
}