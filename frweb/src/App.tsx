import React from 'react';
import { ConfigProvider } from 'antd';
import { Route, Routes } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import './App.css';
import Pages from './pages';
import Login from './pages/Login';
import Logout from './pages/Logout';
import PagesV2 from "./pages/PageV2";
import PagesV1 from "./pages/PageV1";

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
        <Route path={'/ta/*'} element={<PagesV2 />} />
        <Route path={'/fr/*'} element={<PagesV1/>}/>
        <Route path={'*'}  element={<Pages/>}/>
      </Routes>
    </ConfigProvider>
  </div>;
}

export default App;
