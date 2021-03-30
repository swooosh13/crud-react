import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IItems, IItemsReducer } from '../../redux/items-reducer'
import Item from './Item/Item';
import { itemsAPI } from '../../api/api';
import { AxiosResponse } from 'axios';

const Items = () => {
  let items: IItemsReducer = useSelector((state: RootState) => state.items);
  let allItems: IItems = items.allItems;
  let itemsElements: any = allItems.map(item => <Item key={item.id} name={item.name} />)

  useEffect(() => {
    let testItems: IItems = itemsAPI.getItems(1);
    console.log("test items : ", testItems);
  }, [items]);

  return (
    <div>
      {itemsElements}
    </div>
  )
}

export default Items;