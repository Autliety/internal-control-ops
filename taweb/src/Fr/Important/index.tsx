import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProColumns } from '@ant-design/pro-table';
import BaseDescriptions from '../../components/BaseDescriptions';

export default function Important() {

  const columns: ProColumns[] = [
    { title: '事项名称', dataIndex: 'name' },
    { title: '事项类型', dataIndex: 'type' },
    { title: '提交人', dataIndex: 'submitter' },
    { title: '事项概述', dataIndex: 'content' },
  ];

  const data = {
    id: 1,
    name: '海盐县人民医院迁建工程',
    type: '重要项目',
    submitter: '王哲',
    content: '海盐县人民医院迁建工程项目选址在县城城东片区，为海盐县2020年“六大民生服务中心”建设项目之一，项目用地209.172亩，总投资14.73亿' +
        '元。新的海盐县人民医院将按照“三级甲等综合性医院”标准建设，建成后将为居民提供更加优质的医疗服务。目前，该项目二次结构砌筑完成80%。预' +
        '计在2023年底竣工并交付使用。'
  };

  return <PageContainer>
    <BaseDescriptions columns={columns} dataSource={data}/>

  </PageContainer>;
}