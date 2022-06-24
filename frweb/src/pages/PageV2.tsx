import React from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import HeaderRight from './HeaderRight';
import { useAuthProvider } from '../utils/auth';
import { routerV2, routesConfig2 } from '../utils/router';
import Home from "./Home";

function PagesV2() {

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
          // logo={logo}

          rightContentRender={() => <HeaderRight />}

          title="百步镇政府四责协同管理平台"
          route={routerV2}
          location={{ pathname }}
          menuItemRender={(item, dom) => <Link to={ item.path}> {dom} </Link>}
          // loading={!auth.user}

          footerRender={() => <DefaultFooter links={[]} copyright="嘉兴海创信息技术有限公司 2022" />}
      >
        <Routes>
          {routesConfig2.map((route, i) => <Route key={i} {...route} path={route.path.substring(3)} />)}
        </Routes>
      </ProLayout>
    </Provider>
  </>;
}

export default PagesV2;
