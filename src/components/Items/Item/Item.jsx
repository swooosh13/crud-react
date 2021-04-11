import React, { useState } from "react";
import s from "./Item.module.css";
import * as Icon from 'react-feather';
import {Modal} from 'antd'
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
            <p>{description}</p>
            <p>id : {id}</p>
            <p>sector: {position}</p>
          </div>
        </div>
        <div className={s.buttons}>
          <button onClick={handleModal} type="button" className={s.button} style={{background: "#f96176"}}>
          <Icon.X color="white" size={12}/>
          </button>
          <button type="button" className={s.button} style={{background: "#a8acff"}}>
          <Icon.RefreshCcw color="white" size={12}/>
          </button>
          <button type="button" className={s.button} style={{background: "#00b4b2"}}>
            <Icon.Plus color="white" size={12}/>
          </button>
          
        </div>
      </div>
    </div>
  
      <Modal title="Basic Modal" visible={show} onOk={handleRemove} onCancel={handleClose}>
        <p>Забрать?</p>
      </Modal>
    </>
  );
};

export default Item;
