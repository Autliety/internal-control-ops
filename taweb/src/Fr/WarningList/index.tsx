import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import { ContainerOutlined, ExportOutlined, TagsOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Tooltip, Typography } from 'antd';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import BaseDivider from '../../components/BaseDivider';
import BaseEditableTable from '../../components/BaseEditableTable';
import FileUpload from '../../components/FileUpload';
import { useHttp } from '../../utils/request';
import UserSelectCascader from '../../components/UserSelectCascader';

// 黄哨
export const yellowColumns: ProColumns[] = [
  { title: '所属镇', dataIndex: 'ssz' },
  { title: '预警对象', dataIndex: 'yjdx' },
  { title: '预警对象所属单位', dataIndex: 'yjdxssdw', hideInTable: true },
  { title: '预警对象职务', dataIndex: 'yjdxzw', hideInTable: true },
  { title: '预警对象职务层级', dataIndex: 'zwcj', hideInTable: true },
  { title: '预警时间', dataIndex: 'yjsj', renderText: t => moment(t).format('YYYY-MM-DD HH:mm') },
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
  { title: '预警编号', dataIndex: 'yswtbm', width: 360 },
  { title: '预警发现时间', dataIndex: 'yswtfxsj', renderText: v => moment(v).format('YYYY-MM-DD HH:mm') },
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

function WarningList() {

  const navigate = useNavigate();
  const { state: yellowMatter } = useHttp('/warning/yellow/matter?current=false', { initState: [] });

  // 选择负责人
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [principal, setPrincipal] = React.useState<any>(null);
  const [yellowId, setYellowId] = React.useState<number>(null);
  const { http: yellowMatterHttp } = useHttp('/warning/yellow/matter', { method: 'POST', isManual: true });

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<any>([]);
  const [type, setType] = React.useState('');
  const { http: yellowHttp } = useHttp(`/warning/yellow/${file[0]?.id}`, { isManual: true, method: 'POST' });
  const { http: redHttp } = useHttp(`/warning/red/${file[0]?.id}`, { isManual: true, method: 'POST' });

  const { state: yellowState } = useHttp('/warning/yellow', { initState: [] });
  const { state: redState } = useHttp('/warning/red', { initState: [] });

  return <PageContainer
      extra={[
        <Button type={'primary'} icon={<ExportOutlined />} onClick={() => {
          setIsVisible(true);
          setType('yellow')
        }}>黄哨数据导入</Button>,
        <Button type={'primary'} danger icon={<ExportOutlined />} onClick={() => {
          setIsVisible(true);
          setType('red');
        }}>红哨数据导入</Button>
      ]}
  >
    <BaseDivider title={'【云哨黄哨】'} />
    <BaseEditableTable
        columns={yellowColumns.concat({
              title: '操作',
              dataIndex: 'operation',
              render: (_, record: any) => <Space>
                <Tooltip placement='topRight' title={'查看详情'}>
                  <Button
                      type={'primary'}
                      icon={<ContainerOutlined />}
                      size={'small'}
                      onClick={() => navigate(`/fr/zz/warning/yellow/${record.id}`)}
                  />
                </Tooltip>
                <Tooltip placement='topLeft' title={'选择派发'}>
                  <Button
                      type={'primary'}
                      disabled={yellowMatter?.find(item => item.yellowwarning?.id === record.id)}
                      icon={<TagsOutlined />}
                      size={'small'}
                      onClick={() => {
                        setIsOpen(true);
                        setYellowId(record.id);
                      }}
                  />
                </Tooltip>
              </Space>,
              fixed: 'right',
              width: 120,
              align: 'center',
            },
        )}
        value={yellowState}
        isInEdit={false}
    />

    <BaseDivider title={'【云哨红哨】'} />
    <BaseEditableTable
        columns={redColumns.concat({
              title: '操作',
              dataIndex: 'operation',
              render: (_, record: any) => <Space>
                <Button
                    type={'primary'}
                    icon={<ContainerOutlined />}
                    size={'small'}
                    onClick={() => navigate(`/fr/zz/warning/red/${record.id}`)}
                />
              </Space>,
              fixed: 'right',
              width: 120,
              align: 'center',
            },
        )}
        value={redState}
        isInEdit={false}
    />

    <Modal
        title={'外部数据导入'}
        visible={isVisible}
        width={800}
        closable
        onCancel={() => setIsVisible(false)}
        destroyOnClose
        onOk={() => type === 'yellow'
            ? yellowHttp(null, null, {}).then(() => window.location.reload())
            : redHttp(null, null, {}).then(() => window.location.reload())}
    >
      <FileUpload isInEdit onChange={setFile} />
    </Modal>

    <Modal
        title={'选择负责人'}
        visible={isOpen}
        width={800}
        destroyOnClose
        closable
        onCancel={() => setIsOpen(false)}
        onOk={() => yellowMatterHttp(null, null, {
          user: principal,
          yellowwarning: { id: yellowId }
        }).then(() => navigate(`/fr/zz/todo/yellow/${yellowId}`))}
    >
      <UserSelectCascader onChange={setPrincipal} />
      <br /><br />
      <Typography.Text>已选择：{principal?.name ?? '暂未选择'}</Typography.Text>
    </Modal>

  </PageContainer>;
}

export default WarningList;