import React, { Key } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Table } from 'antd';
import { useHttp } from '../../utils/request';

export default function AssetTypes() {

  // const { state, loading } = useHttp('/asset/types', { initState: [] });
  const [expandedRowKeys, setExpandedRowKeys] = React.useState<Key[]>([1]);
  // React.useEffect(() => {
  //   setExpandedRowKeys([1]);
  // }, [state]);

  const columns = [
    { title: '类别编号', dataIndex: 'code', width: '15%' },
    { title: '类别名称', dataIndex: 'fullName' },
    { title: '最后更新日期', dataIndex: 'lastModifyDate' }
  ];

  return <>
    <PageContainer>
      <Table
        expandRowByClick
        expandedRowKeys={expandedRowKeys}
        onExpandedRowsChange={rows => setExpandedRowKeys(rows)}

        columns={columns}
        rowKey="id"

        // loading={loading}
        dataSource={[]}
      />
    </PageContainer>
  </>;
}
