import React from 'react';
import { useDispatch } from 'react-redux';
import { itemsAPI } from '../../api/api';
import { clearItems, ItemType, loadItems, toggleAddModal } from '../../redux/items-reducer'
import ModalAddForm from './ModalAddForm';
import {Button} from 'antd';

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
      <div>
          <Button type={"primary"} shape={"circle"} onClick={handleOpenModal}>add</Button>
          <Button type={"primary"} onClick={handleGenerateRandomClick}>generate</Button>
          <Button type={"primary"} onClick={handleLoadClick}>load</Button>
          <Button type={"primary"} danger onClick={handleClearClick}>clear</Button>
      </div>
      <ModalAddForm />
    </>)
}


export default ButtonsPanel;
