import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import BaseDivider from '../../components/BaseDivider';
import BaseEditableTable from '../../components/BaseEditableTable';
import ExportData from './ExportData';

// 黄哨
export const yellowColumns: ProColumns[] = [
  { title: '所属镇', dataIndex: 'ssz' },
  { title: '预警对象', dataIndex: 'yjdx' },
  { title: '预警对象所属单位', dataIndex: 'yjdxssdw', hideInTable: true },
  { title: '预警对象职务', dataIndex: 'yjdxzw', hideInTable: true },
  { title: '预警对象职务层级', dataIndex: 'zwcj', hideInTable: true },
  { title: '预警时间', dataIndex: 'yjsj' },
  { title: '预警等级', dataIndex: 'yjdj' },
  { title: '是否完成', dataIndex: 'sfclwc' },
  { title: '是否纠正', dataIndex: 'sfjz' },
  { title: '预警规则', dataIndex: 'yjgz', hideInTable: true },
  { title: '预警描述', dataIndex: 'yjms', hideInTable: true },
  { title: '预警环节', dataIndex: 'yjhj', hideInTable: true },
  { title: '处理结果', dataIndex: 'cljg' },
  { title: '村委会名称', dataIndex: 'cwh', hideInTable: true },
  { title: '村委会行政区划', dataIndex: 'cwhxzqh', hideInTable: true },
  { title: '镇政府名称', dataIndex: 'zzfmc', hideInTable: true },
  { title: '镇政府编码', dataIndex: 'zzfbm', hideInTable: true },
  { title: '县政府名称', dataIndex: 'xzfmc', hideInTable: true },
  { title: '县政府编码', dataIndex: 'xzfbm', hideInTable: true },
  { title: '市政府名称', dataIndex: 'szfmc', hideInTable: true },
  { title: '市政府编码', dataIndex: 'szfbm', hideInTable: true },
];

// 红哨
export const redColumns: ProColumns[] = [
  { title: '村委会', dataIndex: 'cwh', hideInTable: true },
  { title: '村社编码', dataIndex: 'cwhxzqh', hideInTable: true },
  { title: '市政府', dataIndex: 'szf', hideInTable: true },
  { title: '市政府编码', dataIndex: 'szfbm', hideInTable: true },
  { title: '县政府', dataIndex: 'xzf', hideInTable: true },
  { title: '县政府编码', dataIndex: 'xzfbm', hideInTable: true },
  { title: '镇政府', dataIndex: 'zzf', hideInTable: true },
  { title: '镇政府编码', dataIndex: 'zzfbm', hideInTable: true },
  { title: '预警编号', dataIndex: 'yswtbm' },
  { title: '预警发现时间', dataIndex: 'yswtfxsj' },
  { title: '所属领域二级分类', dataIndex: 'sslyejfl', hideInTable: true },
  { title: '一级单位名称', dataIndex: 'yjdwmc', hideInTable: true },
  { title: '一级单位企业统一信用代码', dataIndex: 'yjdwqytixydm', hideInTable: true },
  { title: '二级单位名称', dataIndex: 'ejdwmc', hideInTable: true },
  { title: '二级单位企业统一信用代码', dataIndex: 'ejdwqytixydm', hideInTable: true },
  { title: '三级单位名称', dataIndex: 'sjdwmc', hideInTable: true },
  { title: '三级单位企业统一信用代码', dataIndex: 'sjdwqytixydm', hideInTable: true },
  { title: '对象姓名', dataIndex: 'dxxm' },
  { title: '身份证', dataIndex: 'sfz', hideInTable: true },
  { title: '对象职务', dataIndex: 'dxzw', hideInTable: true },
  { title: '对象职务层级', dataIndex: 'dxzwcj', hideInTable: true },
  { title: '对象单位', dataIndex: 'dxdw' },
  { title: '对象部门', dataIndex: 'dxbm', hideInTable: true },
  { title: '预警办理方式', dataIndex: 'hsyjblfs' },
  { title: '预警办理状态', dataIndex: 'hsyjblzt' },
  { title: '退回事由', dataIndex: 'thsy', hideInTable: true },
  { title: '疑似问题内容', dataIndex: 'yswtnr', hideInTable: true },
  { title: '是否属实', dataIndex: 'sfss', hideInTable: true },
  { title: '不属实情况说明', dataIndex: 'bssqksm', hideInTable: true },
  { title: '是否存在违纪违法行为', dataIndex: 'sfczwjwfxw', hideInTable: true },
  { title: '详细核查或处置情况说明', dataIndex: 'xxhchczqksm', hideInTable: true },
  { title: '是否有追回资金', dataIndex: 'sfyzhzj', hideInTable: true },
  { title: '追回资金数', dataIndex: 'zhzjs', hideInTable: true },
  { title: '是否重复件', dataIndex: 'sfcfj', hideInTable: true },
  { title: '办结时间', dataIndex: 'bjsj' },
  { title: '是否复发', dataIndex: 'ssff', hideInTable: true },
];

function TodoList() {

  return <PageContainer
      extra={[<ExportData />]}
  >
    <BaseDivider title={'【云哨黄哨】'} />
    <BaseEditableTable columns={yellowColumns} value={[]} isInEdit={false} />

    <BaseDivider title={'【云哨红哨】'} />
    <BaseEditableTable columns={redColumns} value={[]} isInEdit={false} />

  </PageContainer>;
}

export default TodoList;