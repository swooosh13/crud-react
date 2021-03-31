import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IItems, IItemsReducer } from '../../redux/items-reducer'
import Item from './Item/Item';
import { AxiosResponse } from 'axios';
import {getItemById, getItems} from '../../redux/items-reducer';

const Items = () => {

  let items: IItemsReducer = useSelector((state: RootState) => state.items);
  let dispatch = useDispatch();
  let allItems: IItems = items.allItems;
  let itemsElements: any = allItems.map(item => <Item key={item.id} name={item.name} />)

  useEffect(() => {
    dispatch(getItemById(0));
    // dispatch(getItems());
  }, []);

  return (
    <div>
      {itemsElements}
    </div>
  )
}

export default Items;