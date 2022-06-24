import React from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import HeaderRight from './HeaderRight';
import { useAuthProvider } from '../utils/auth';
import { router, routesConfig } from './router';
import logo from '../image/logo.png';
import NotFound from './NotFound';
import { useHttp } from '../utils/request';

function Pages() {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { auth, setAuth, Provider } = useAuthProvider();
  const { http } = useHttp('/user?current=true', { isManual: true });
  React.useEffect(() => {
    http()
        .then(setAuth)
        .catch(() => navigate('/login'));
  }, [pathname]);

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

          title="百步经济开发区(百步镇)督考平台"
          route={router}
          location={{ pathname }}
          menuItemRender={(item, dom) => <Link to={item.path}> {dom} </Link>}
          // loading={!auth.user}

          footerRender={() => <DefaultFooter links={[]} copyright="嘉兴海创信息技术有限公司 2022"/>}
      >
        <Routes>
          {routesConfig.map((route, i) => <Route key={i} {...route} path={route.path.substring(3)}/>)}
          <Route key="404" element={NotFound}/>
        </Routes>
      </ProLayout>
    </Provider>
  </>;
}

export default Pages;
