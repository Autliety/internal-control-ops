import React from 'react';
import { ConfigProvider } from 'antd';
import { Route, Routes } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import './App.css';
import Login from './Ta/Login';
import Logout from './Ta/Logout';
import PagesTa from './Ta/index';
import PagesFr from './Fr/index';


moment.locale('zh-cn');

function App() {
  return <div className='App'>
    <ConfigProvider
        locale={zhCN}
        input={{ autoComplete: 'off' }}
        renderEmpty={() => '暂无数据'}
    >
      <Routes>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/logout'} element={<Logout/>}/>
        <Route path={'/ta/*'} element={<PagesTa/>}/>
        <Route path={'/fr/*'} element={<PagesFr/>}/>
      </Routes>
    </ConfigProvider>
  </div>;
}

export default App;
