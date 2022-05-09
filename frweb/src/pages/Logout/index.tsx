import React from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { useAppDispatch } from '../../store/hook';
import { logout } from '../../store/slice/loginSlice';

export default function Logout() {

  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  React.useEffect(() => {
    message.success('已退出');
    dispatch(logout());
    navigate('/login', { replace: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}