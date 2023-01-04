import React from 'react';
import { ConfigProvider } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import './App.css';
import LoginFr from './pages/Login/LoginFr';
import Logout from './pages/Logout';
import PagesTa from './Ta/index';
import PagesFr from './Fr/index';
import Display from './pages/Display';
import LoginTa from './pages/Login/LoginTa';

moment.locale('zh-cn');

function App() {

  ConfigProvider.config({
    theme: {
      primaryColor: '#2FA9B8',
    },
  });

  return <div className='App'>
    <ConfigProvider
        locale={zhCN}
        input={{ autoComplete: 'off' }}
        renderEmpty={() => '暂无数据'}
    >
      <Routes>
        {/* 大屏数据展示 */}
        <Route path={'/data'} element={<Display />} />
        <Route path={'/'} element={<Navigate to={'/login'} replace />} />
        <Route path={'/login'} element={<Navigate to={'/loginFr'} replace />} />
        <Route path={'/loginFr'} element={<LoginFr />} />
        <Route path={'/loginTa'} element={<LoginTa />} />
        <Route path={'/logout'} element={<Logout />} />
        <Route path={'/ta/*'} element={<PagesTa />} />
        <Route path={'/fr/*'} element={<PagesFr />} />
      </Routes>
    </ConfigProvider>
  </div>;
}

export default App;
