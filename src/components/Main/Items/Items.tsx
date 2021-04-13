import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/store';
import { IItems, IItemsReducer } from '../../../redux/reducers/items/items-reducer'
import Item from './Item/Item';
import s from './Items.module.css'

const Items = () => {

  let items: IItemsReducer = useSelector((state: RootState) => state.items);
  let allItems: IItems = items.allItems;
  let itemsElements: any;
  
  if (allItems) {
    itemsElements = allItems.map(item => 
      (<Item key={item.id} 
        name={item.name} description={item.description} id={item.id} position={item.position}/>))
  }

  return (<div className={s.container}>
    {itemsElements}
  </div>
  )
}

export default Items;