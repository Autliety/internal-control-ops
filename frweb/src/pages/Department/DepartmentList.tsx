import React from 'react';
import { Button, Collapse, List } from 'antd';
import { useHttp } from '../../utils/request';

const { Panel } = Collapse;

type Props = {
  isEdit?: boolean,
  onChange?: { (id: string): void },
  onNameChange?: { (value: string): void },
}

export default function DepartmentList({ isEdit, onChange, onNameChange }: Props) {

  const { state, loading } = useHttp('/department', { initState: [] });

  return <>
    <Collapse bordered={false} accordion defaultActiveKey={0}>
      {
        state.map((item, index) => <Panel
                key={index}
                header={<div onClick={() => {
                  onNameChange(item.name);
                  onChange(item.id);
                }
                }>
                  {item.name}
                </div>}
            >
              <List
                  dataSource={item.children}
                  loading={loading}
                  renderItem={(item: any) => (
                      <List.Item>
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
                            isEdit && <Button type='link'>编辑</Button>
                        }
                      </List.Item>
                  )}
              />
            </Panel>
        )
      }
    </Collapse>
  </>;
}