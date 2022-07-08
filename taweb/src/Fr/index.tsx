import React from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { useAuthProvider } from '../utils/auth';
import { router, routesConfig } from './router';
import logo from '../image/logo.png';
import { useHttp } from '../utils/request';
import HeaderRight from '../components/HeaderRight';
import NotFound from '../pages/NotFound';

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
          menu={{ defaultOpenAll: false, autoClose: false }}
          logo={logo}

          rightContentRender={() => <HeaderRight/>}

          title="区(镇)、村(社)一体全面从严治党责任落实应用系统"
          route={router}
          location={{ pathname }}
          menuItemRender={(item, dom) => <Link to={item.path}> {dom} </Link>}
          loading={!auth.user}

          footerRender={() => <DefaultFooter links={[]} copyright="嘉兴海创信息技术有限公司 2022"/>}
      >
        <Routes>
          {routesConfig.map((route, i) => <Route key={i}  {...route} path={route.path?.substring(3)}/>)}
          <Route key="404" element={NotFound}/>
        </Routes>
      </ProLayout>
    </Provider>
  </>;
}

export default Pages;
