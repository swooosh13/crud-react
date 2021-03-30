import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Main.module.css'
import {AppDispatch, RootState} from '../../redux/store';
import Items from '../Items/Items';

const Main = () => {
  let dispatch: AppDispatch = useDispatch();
  
  useEffect(() => {
    
  }, [dispatch])

  return <div className={s.container}>
    <div className={s.item}>
      main tool
    </div>
    <div>
      <Items />
    </div>
  </div>
}

export default Main;