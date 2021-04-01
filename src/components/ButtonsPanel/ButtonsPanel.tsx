import React from 'react';
import { useDispatch } from 'react-redux';
import { itemsAPI } from '../../api/api';
import { clearItems, ItemType, loadItems, toggleAddModal } from '../../redux/items-reducer'
import ModalAddForm from './ModalAddForm';

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
    let item: ItemType = {
      id: Math.floor(Math.random() * 100),
      name: Math.random().toString(36).substring(7),
      description: Math.random().toString(36).substring(7),
      position: [
        { sector: Math.random().toString(36).substring(7), cell: Math.floor(Math.random() * 100) }
      ]
    };
    const response: any = await itemsAPI.postItem(item);
    console.log(response);
    dispatch(loadItems());
  }

  return (
    <>
      <div>
        <div className="btn-group">
          <button type="button" className={"btn btn-primary"} onClick={handleLoadClick}>load</button>
          <button type="button" className={"btn btn-danger"} onClick={handleClearClick}>clear</button>
          <button type="button" className={"btn btn-success"} onClick={handleGenerateRandomClick}>generate</button>
          <button type="button" className={"btn btn-success"} onClick={handleOpenModal}>add</button>
        </div>
      </div>
      <ModalAddForm />
    </>)
}


export default ButtonsPanel;