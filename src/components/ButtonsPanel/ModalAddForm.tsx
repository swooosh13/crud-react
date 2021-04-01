import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

import { ItemType, loadItems, toggleAddModal } from '../../redux/items-reducer';
import { itemsAPI } from '../../api/api';

const ModalForm = () => {
  

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const itemsReducer = useSelector((state: RootState) => state.items);
  const { showAddModal } = itemsReducer;


  useEffect(() => {
    setShow(showAddModal);
  }, [showAddModal, dispatch]);

  const handleAddItemModal = async () => {
    let item: ItemType = {
      id: Math.floor(Math.random() * 100),
      name: "add otem",
      description: Math.random().toString(36).substring(7),
      position: [
        { sector: Math.random().toString(36).substring(7), cell: Math.floor(Math.random() * 100) }
      ]
    };
    const response: any = await itemsAPI.postItem(item);
    console.log(response);
    dispatch(loadItems());
  }

  const handleCancle = () => {
    dispatch(toggleAddModal());
  }

  return (
    <Modal
      show={show}
      onHide={null}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="ControlInput1">
            <Form.Label>Item name</Form.Label>
            <Form.Control type="" placeholder="mk-234" />
          </Form.Group>

          <Form.Group controlId="ControlTextarea1">
            <Form.Label>enter description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="25x42" />
          </Form.Group>

          <Form.Group controlId="ControlInput2">
            <Form.Label>Sector</Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">Choose...</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="ControlInput2">
            <Form.Label>position (cell)</Form.Label>
            <Form.Control type="" placeholder="wefew" />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancle}>
          отмена
          </Button>
        <Button variant="primary" type="submit">Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalForm;