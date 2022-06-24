import React from 'react';
import { Input, Select, Space } from 'antd';

export default function GlobalSearch() {
  return <>
    <div className={'content'}>
      <Space>
        <Select defaultValue={0} dropdownMatchSelectWidth={200}>
          <Select.Option value={0}>全部</Select.Option>
          <Select.Option value={1}>‘1+X’会议</Select.Option>
          <Select.Option value={2}>问题清单</Select.Option>
          <Select.Option value={3}>措施清单</Select.Option>
          <Select.Option value={4}>一单三书</Select.Option>
        </Select>
        <Input.Search placeholder={'全局搜索'} enterButton />
      </Space>
    </div>
  </>;
}