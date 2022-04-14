import React, { ReactNode } from 'react';
import { Descriptions, Form, Input } from 'antd';

import { deepValue } from '../utils/map';

export type ColumnDef = {
  key?: string,
  title?: string,
  type?: string,
  dataIndex: string | string[],
  render?: (string) => ReactNode,
  renderFormItem?: () => ReactNode,
}

type Props = {
  isEdit: boolean,
  columns: ColumnDef[],
  data?: any,
  edit?: boolean,
}

export default function EditableDescriptions(props: Props) {

  const [state, setState] = React.useState(props.data || {});
  React.useEffect(() => {
    if (props.data) {
      setState(props.data)
    }
  }, [props.data]);

  return <>
    <Form>
      <Descriptions
          bordered
          style={{ background: '#fff' }}
          column={{ sm: 2, xs: 1 }}
          labelStyle={{ width: '20%' }}
          contentStyle={{ width: '30%' }}
      >
        {props.columns.map((col, index) => {
              let key = col.key || (Array.isArray(col.dataIndex) ? col.dataIndex.join('_') : col.dataIndex);
              let text = deepValue(state, col.dataIndex);
              let render = col.render?.(text) ?? text;
              return <Descriptions.Item
                  key={index}
                  label={col.title || key}
              >
                <Form.Item style={{ height: 8 }}>
                  {
                    props.isEdit
                        ? col.renderFormItem?.() || <Input disabled={!col.type} type={col.type} value={render}/>
                        : render
                  }
                </Form.Item>
              </Descriptions.Item>
            }
        )}
      </Descriptions>
    </Form>
  </>
}
