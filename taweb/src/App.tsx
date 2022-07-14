import React from 'react';
import { ConfigProvider } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import './App.css';
import Login from './pages/Login';
import Logout from './pages/Logout';
import PagesTa from './Ta/index';
import PagesFr from './Fr/index';


moment.locale('zh-cn');

function App() {

  ConfigProvider.config({
    theme: {
      primaryColor: '#2FA9B8',
    },
  });

  return <div className="App">
    <ConfigProvider
        locale={zhCN}
        input={{ autoComplete: 'off' }}
        renderEmpty={() => '暂无数据'}
    >
      <Routes>
        <Route path={'/'} element={<Navigate to={'/login'} replace/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/logout'} element={<Logout/>}/>
        <Route path={'/ta/*'} element={<PagesTa/>}/>
        <Route path={'/fr/*'} element={<PagesFr/>}/>
      </Routes>
    </ConfigProvider>
  </div>;
}

export default App;
