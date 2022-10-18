import React from 'react';
import { TagsTwoTone } from '@ant-design/icons';
import { Space } from "antd";

function Title({ title }) {
  return <div className={'labelStyle'}>
    <Space>
      <TagsTwoTone twoToneColor={'#fff'} style={{ fontSize: 16 }} />
      {`【${title}】`}
    </Space>
  </div>;
}

export default Title;