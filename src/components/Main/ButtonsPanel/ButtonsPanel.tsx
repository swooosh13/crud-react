import React from 'react';
import { useDispatch } from 'react-redux';
import ModalAddForm from './ModalAddForm';
import { Button } from 'antd';
import { logout } from '../../../redux/reducers/auth/actions';
import { Link } from 'react-router-dom';

import '../../../index';

const ButtonsPanel = () => {

  const dispatch = useDispatch();

  const logoutHandle = () => {
    dispatch(logout());
  }

  return (
    <>
      <div className="buttons-panel">
        <Link to="/login">
          <div className="logout-link">
            <Button type='link' onClick={logoutHandle}>logout</Button>
          </div>
        </Link>
      </div>
      <ModalAddForm />
    </>)
}


export default ButtonsPanel;
