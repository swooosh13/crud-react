import React, { useState } from "react";
import s from "./Item.module.css";
import * as Icon from "react-feather";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../../redux/reducers/items/actions";
import { Button, Space, Row, Col, Checkbox } from "antd";
import { StarOutlined } from "@ant-design/icons";

import "../../../../index";

const style = {
  padding: "1px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff",
  minHeight: "40px",
};

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

  const onSelect = () => {
    props.onSelect(id)
  }

  return (
    <>
      <Col className="gutter-row" span={3}>
        <div className="item-subblock">
          <div style={style}>
            <div className="checkbox">
            <Checkbox onChange={onSelect}/>
            </div>
            <div>
            <StarOutlined />
            </div>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={style}>{props.name}</div>
      </Col>
      <Col className="gutter-row" span={5}>
        <div style={style}>{props.description}</div>
      </Col>
      <Col className="gutter-row" span={2}>
        <div style={style}>{props.sector}</div>
      </Col>
      <Col className="gutter-row" span={2}>
        <div style={style}>{props.position}</div>
      </Col>
      <Col className="gutter-row" span={2}>
        <div style={style}>{props.id}</div>
      </Col>

      <Col className="gutter-row" span={5}>
        <div style={style}>
          <Button type="text" onClick={handleModal}>
            <Icon.X color="black" size={12} />
          </Button>
          <Button type="text">
            <Icon.RefreshCcw color="black" size={12} />
          </Button>
          <Button type="text">
            <Icon.Plus color="black" size={12} />
          </Button>
        </div>
      </Col>
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
