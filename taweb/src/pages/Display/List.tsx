import React from 'react';
import { Space } from "antd";

function List() {

  return <div>
    <Space size={'large'}>
      <div className={'listStyle'}>
        <p style={{ color: '#fff' }}>三重一大</p>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>18</h1>
      </div>
      <div className={'listStyle'}>
        <p style={{ color: '#fff' }}>5+1谈话</p>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>18</h1>
      </div>
      <div className={'listStyle'}>
        <p style={{ color: '#fff' }}>相互监督提醒</p>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>18</h1>
      </div>
    </Space>
    <br /><br />
    <Space size={'large'}>
      <div className={'listStyle'}>
        <p style={{ color: '#fff' }}>履责情况</p>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>18</h1>
      </div>
      <div className={'listStyle'}>
        <p style={{ color: '#fff' }}>述责述廉评议</p>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>18</h1>
      </div>
      <div className={'listStyle'}>
        <p style={{ color: '#fff' }}>民主生活会督导</p>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>18</h1>
      </div>
    </Space>


  </div>;
}

export default List;