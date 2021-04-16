import React, { useState } from "react";
import s from "./Item.module.css";
import * as Icon from "react-feather";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../../redux/reducers/items/actions";
import { Button } from "antd";

const Item = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { id, name, description, position } = props;

  const handleModal = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleRemove = () => {
    dispatch(removeItem(id));
    setShow(false);
  };

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
            <Button type="text" onClick={handleModal}>
              <Icon.X color="white" size={12} />
            </Button>
            <Button type="text">
              <Icon.RefreshCcw color="white" size={12} />
            </Button>
            <Button type="text">
              <Icon.Plus color="white" size={12} />
            </Button>
          </div>
        </div>
      </div>

      <Modal
        title="Basic Modal"
        visible={show}
        onOk={handleRemove}
        onCancel={handleClose}
      >
        <p>Забрать?</p>
      </Modal>
    </>
  );
};

export default Item;
