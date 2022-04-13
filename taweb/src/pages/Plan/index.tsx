import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Button, Modal, Select, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { Link, useSearchParams } from 'react-router-dom';
import { ContainerOutlined } from '@ant-design/icons';
import { LightFilter, ProFormSelect } from '@ant-design/pro-form';
import { useDebounceFn } from 'ahooks'

import { useHttp } from '../../utils/request';

const { Option } = Select;

export default function Plan() {

  const [search, setSearch] = useSearchParams();

  const { state, loading, http } = useHttp('/plan', { initState: [], isManual: true, params: search });
  const { state: deptState } = useHttp('/department?view=LIST', { initState: [] });
  const { state: asmtState } = useHttp('/assessment?view=LIST', { initState: [] });
  const { state: assessments } = useHttp('/assessment', { initState: [] });


  // 筛选条件
  const { run } = useDebounceFn(() => http(), { wait: 100 })
  const setQuery = nextInit => {
    //@ts-ignore
    setSearch(Object.fromEntries(Object.entries({
      ...nextInit,
      create: search.get('create'),
    })
        .filter(([_, v]) => v)));
    run();
  };
  React.useEffect(() => {
    setQuery(Object.fromEntries(search.entries()));
  }, []);

  // 获取
  function getValueEnum(v) {
    let valueEnum = {};
    v.forEach((item: any) => {
      valueEnum = { ...valueEnum, [item.id]: item.name }
    });
    return valueEnum;
  }

  // modal:挑选未计划的指标
  const [isVisible, setIsVisible] = React.useState(false);

  const columns: ColumnsType = [
    { title: '编号', dataIndex: 'id', width: 150 },
    { title: '计划名称', dataIndex: 'name' },
    { title: '创建时间', dataIndex: 'createTime' },
    { title: '最后更新时间', dataIndex: 'updateTime' },
    {
      title: '详情',
      key: 'operation',
      width: '5%',
      align: 'center',
      fixed: 'right',
      render: (_, record: any) => <Link to={`/plan/${record.id}`}><ContainerOutlined/></Link>,
    }
  ];

  return <PageContainer
      extra={<Button type={'primary'} onClick={() => setIsVisible(true)}>新建计划</Button>}
  >
    {/* 筛选视图 */}
    <div className={'content'}>
      <LightFilter
          bordered
          fields={Array.from(search.entries()).map(e => ({ name: e[0].split('.'), value: e[1] }))}
          onFieldsChange={(_, fields) =>
              setQuery(Object.fromEntries(fields.map(({ name, value }: any) => ([name.join('.'), value]))))}
      >

        <ProFormSelect name={'deptId'} label={'所属部门'} valueEnum={getValueEnum(deptState)}/>
        <ProFormSelect name={'asmtId'} label={'相关指标'} valueEnum={getValueEnum(asmtState)}/>
      </LightFilter>
    </div>
    <br/>

    <Table
        bordered
        loading={loading}
        size={'small'}
        scroll={{
          scrollToFirstRowOnChange: true,
          x: 1700,
        }}

        columns={columns}
        rowKey={'id'}

        dataSource={state}
    />
    {/* modal */}
    <Modal
        title={'未作计划指标'}
        closable
        visible={isVisible}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
    >
      <Alert showIcon message={'请选择一项指标进行计划制定'} type={'warning'}/><br/>
      <Select
          showSearch
          placeholder={'请选择'}
          style={{ width: 200 }}
          onChange={v => console.log(v)}
      >
        {
          assessments.filter(v => v.children === null || v.children.length === 0).map((item, index) => <Option
              key={index} value={item.name}>
            {item.name}
          </Option>)
        }
      </Select>
    </Modal>

  </PageContainer>;
}
