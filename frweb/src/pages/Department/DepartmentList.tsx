import React from 'react';
import { List } from 'antd';
import { useHttp } from '../../utils/request';

export default function DepartmentList({ onChange }) {

  const { state, loading } = useHttp('/department', { initState: [] });

  return <>
    <List
        className={'content'}
        dataSource={state}
        loading={loading}
        renderItem={(item: any,index:number) => <List.Item key={index}>
          <div
              onClick={() => onChange(item)}
              style={{ cursor: 'pointer' }}
          >
            {item.name}
          </div>
        </List.Item>}
    />

  </>;
}