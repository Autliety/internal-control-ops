import React from 'react';
import { List } from 'antd';
import { useHttp } from '../../utils/request';
import DepartmentEditModal from './DepartmentEditModal';

type Props = {
  isEdit?: boolean,
  onChange?: { (id: string): void },
  onNameChange?: { (value: string): void },
}

export default function DepartmentList({ isEdit, onChange, onNameChange }: Props) {

  const { state, loading } = useHttp('/department', { initState: [] });

  return <>
    <List
        header={<p>部门列表</p>}
        className={'content'}
        dataSource={state}
        loading={loading}
        renderItem={(item: any, index: number) => (
            <List.Item key={index}>
              <div
                  onClick={() => {
                    onNameChange(item.name);
                    onChange(item.id);
                  }}
                  style={{ cursor: 'pointer' }}
              >
                {item.name}
              </div>
              {
                  isEdit && <DepartmentEditModal departmentData={item}/>
              }
            </List.Item>
        )}
    />
  </>;
}