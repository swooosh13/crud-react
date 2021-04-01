import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Main.module.css'
import { AppDispatch, RootState } from '../../redux/store';
import Items from '../Items/Items';
import ButtonsPanel from '../ButtonsPanel/ButtonsPanel';
import * as Icon from 'react-feather';

const Main = () => {
  let dispatch: AppDispatch = useDispatch();

  return <div className={s.container}>
    <div className={s.panel}>

      <div className={s.block}>
        <ButtonsPanel />
      </div>
      <form className="d-flex">
        <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn" type="submit">
            <Icon.Search color="white" size={24}/>
          </button>
          </form>
    </div>
    <div>
      <Items />
    </div>

  </div>
}

export default Main;