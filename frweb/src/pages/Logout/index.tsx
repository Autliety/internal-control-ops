import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useHttp } from '../../utils/request';
import { message } from 'antd';

export default function Logout() {

  const navigate = useNavigate();
  let location = useLocation();
  const { http } = useHttp('/logout', { isManual: true });

  React.useEffect(() => {
    http()
      .then(() => {
        location.state ? message.success('密码修改成功！请重新登录!') : message.success('已登出');
        navigate('/login', { replace: true });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}