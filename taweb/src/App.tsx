import React from 'react';
import { ConfigProvider } from 'antd';
import { Route, Routes } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';

import './App.css';
import Pages from './pages';
import PagesV2 from './pages/PagesV2';

function App() {
  return <div className="App">
    <ConfigProvider
        locale={zhCN}
        input={{ autoComplete: 'off' }}
        renderEmpty={() => '暂无数据'}
    >
      <Routes>
        <Route path={'/v2/*'} element={<PagesV2 />} />
        <Route path={'*'} element={<Pages />} />
      </Routes>
    </ConfigProvider>
  </div>;
}

export default App;
