import { IItems } from '../redux/items-reducer';
import {itemsAPI} from './api';

it('get items with id = 1', () => {
  let items: any = itemsAPI.getItems(1).then((res: any) => {
    return res.data;
  });

  expect(items[0].name).toBe("b-23r55");
}) 