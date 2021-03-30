import React from "react";
import s from "./Item.module.css";

const Item = ({ name }) => {
  return (
    <div className={s.item}>
      <div>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Item;
