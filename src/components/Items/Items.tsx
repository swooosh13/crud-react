import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IItems, IItemsReducer } from '../../redux/items-reducer'
import Item from './Item/Item';
import { itemsAPI } from '../../api/api';

const Items = () => {
  let items: IItemsReducer = useSelector((state: RootState) => state.items);
  let allItems: IItems = items.allItems;
  let itemsElements: any = allItems.map(item => <Item key={item.id} name={item.name}/>  )

  useEffect(() => {
    console.log(allItems);
  }, [items]);

  return (
    <div>
      {itemsElements}
    </div>
  )
}

export default Items;