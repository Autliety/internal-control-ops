import React from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import HeaderRight from './HeaderRight';
import { useAuthProvider } from '../utils/auth';
import { router, routerV2, routesConfig } from '../utils/router';

function Pages() {

  const { auth, Provider } = useAuthProvider();
  const { pathname } = useLocation();
  const [isMain, setIsMain] = React.useState(true);

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

          rightContentRender={() => <HeaderRight isMain={isMain} onChange={() => {
            setIsMain(!isMain);
          }}/>}

          title="百步镇政府督考系统"
          route={isMain ? router : routerV2}
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
