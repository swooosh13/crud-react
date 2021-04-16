import React, { useState, useEffect } from 'react';

import { RootState } from '../../../redux/reducers/store';
import { useDispatch, useSelector } from 'react-redux';
import {Modal} from 'antd';

import { loadItems, toggleAddModal } from '../../../redux/reducers/items/actions';

const ModalForm = () => {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const itemsReducer = useSelector((state: RootState) => state.items);
  const { showAddModal } = itemsReducer;

  useEffect(() => {
    setShow(showAddModal);
  }, [showAddModal, dispatch]);

  // TODO
  const handleAddItemModal = async () => {
    // await itemsAPI.postItem(item);
    dispatch(loadItems());
  }

  const handleCancel = () => {
    dispatch(toggleAddModal());
  }

  // TODO add form
  return (
    <Modal title="Basic Modal" visible={show} onOk={handleCancel} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default ModalForm;
