import React from 'react';
import { useDispatch } from 'react-redux';
import { itemsAPI } from '../../../api/api';
import { clearItems, loadItems, toggleAddModal } from '../../../redux/reducers/items/items-reducer'
import ModalAddForm from './ModalAddForm';
import { Button } from 'antd';
import { logout } from '../../../redux/reducers/auth/actions';
import { Link } from 'react-router-dom';

import '../../../index';

const ButtonsPanel = () => {

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(toggleAddModal());
  }
  const handleClearClick = () => {
    dispatch(clearItems());
  }

  const handleLoadClick = () => {
    dispatch(loadItems());
  }

  const logoutHandle = () => {
    dispatch(logout());
  }

  const handleGenerateRandomClick = async () => {
    let item = {
      name: Math.random().toString(36).substring(7),
      description: Math.random().toString(36).substring(7),
      sector: Math.random().toString(36).substring(7),
      position: Math.floor(Math.random() * 100).toString()
    };

    await itemsAPI.postItem(item);
    dispatch(loadItems());
  }

  return (
    <>
      <div className="buttons-panel">
        <Button type={"primary"} onClick={handleOpenModal}>add</Button>
        <Button type={"primary"} onClick={handleGenerateRandomClick}>generate</Button>
        <Button type={"primary"} onClick={handleLoadClick}>load</Button>
        <Button type={"primary"} ghost onClick={handleClearClick}>clear</Button>
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
