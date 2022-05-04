import React from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import HeaderRight from './HeaderRight';
import { useAuthProvider } from '../utils/auth';
import { router, routesConfig } from '../utils/router';
import logo from '../image/logo.png';

function Pages() {

  const { auth, Provider } = useAuthProvider();
  const { pathname } = useLocation();

  return <>
    <Provider value={auth}>
      <ProLayout
          fixSiderbar
          fixedHeader
          layout="mix"
          contentWidth="Fluid"
          navTheme="light"
          menu={{ defaultOpenAll: true, autoClose: false }}
          logo={logo}

          rightContentRender={() => <HeaderRight/>}

          title="百步镇政府四责协同管理平台"
          route={router}
          location={{ pathname }}
          menuItemRender={(item, dom) => <Link to={item.path}> {dom} </Link>}
          // loading={!auth.user}

          footerRender={() => <DefaultFooter links={[]} copyright="嘉兴海创信息技术有限公司 2022"/>}
      >
        <Routes>
          {routesConfig.map((route, i) => <Route key={i} {...route} />)}
        </Routes>
      </ProLayout>
    </Provider>
  </>;
}

export default Pages;
