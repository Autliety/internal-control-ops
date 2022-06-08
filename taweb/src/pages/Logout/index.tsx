import React from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { useHttp } from '../../utils/request';

export default function Logout() {

  const navigate = useNavigate();
  const { http } = useHttp('/logout', { isManual: true });

  React.useEffect(() => {
    http()
        .then(() => {
          message.success('已退出');
          navigate('/login', { replace: true });
        });
  }, []);
  return <></>;
}