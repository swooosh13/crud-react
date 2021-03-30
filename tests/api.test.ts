import axios, {AxiosResponse} from 'axios';
import {itemsAPI} from '../src/api/api'

describe('api test', () => {
  it('getItems',  () => {
    let items = itemsAPI.getItems(1);

    console.log(items);
    expect(items[0].id).toBe(1);
  })
  
  it('not simple ', () => {
    expect(2).toBe(2);
  })
})
