import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Main.module.css'
import { AppDispatch, RootState } from '../../redux/store';
import Items from '../Items/Items';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import * as Icon from 'react-feather';
import {Input} from 'antd';

const {Search} = Input;

const Main = () => {
  let dispatch: AppDispatch = useDispatch();

  return <div className={s.container}>
    <div className={s.panel}>

      <div className={s.block}>
        <ButtonsPanel />
      </div>
      <Search placeholder="input search text" style={{ width: 500 }} />
    </div>
    <div>
      <Items />
    </div>

  </div>
}

export default Main;
