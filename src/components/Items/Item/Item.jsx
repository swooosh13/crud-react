import React, { useState } from "react";
import s from "./Item.module.css";
import * as Icon from 'react-feather';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useDispatch } from "react-redux";
import { removeItem } from "../../../redux/items-reducer";

const Item = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const {id, name, description, position} = props;

  const handleModal = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  }

  const handleRemove = () => {
    dispatch(removeItem(id));
    setShow(false);
  }

  return (
    <>
    <div className={s.block}>
      <div className={s.item_name}>
        <span>{name}</span>
      </div>

      <div className={s.info}>
        <div className={s.maininfo}>
          <div>
            <h5>{description}</h5>
            <p>id : {id}</p> 
            <p>sector: {position[0].sector}</p>
            <p>cell: {position[0].cell}</p>
          </div>
        </div>
        <div className={s.buttons}>
          <button onClick={handleModal} type="button" className={"btn" + " " + s.button} style={{background: "#f96176"}}>
          <Icon.X color="white" size={12}/>
          </button>
          <button type="button" className={"btn" + " " + s.button} style={{background: "#a8acff"}}>
          <Icon.RefreshCcw color="white" size={12}/>
          </button>
          <button type="button" className={"btn" + " " + s.button} style={{background: "#00b4b2"}}>
            <Icon.Plus color="white" size={12}/>
          </button>
          
        </div>
      </div>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove item: {name} ({description})</Modal.Title>
        </Modal.Header>
        <Modal.Body>Если хотите забрать или удалить из базы нажмите ОК</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            отмена
          </Button>
          <Button variant="primary" onClick={handleRemove}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Item;
