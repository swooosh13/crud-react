import axios from "axios";
import { ItemType } from "../redux/reducers/type";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://cell-mock-api.herokuapp.com/",
});

export const itemsAPI = {
  getItem(id: number): any {
    return instance.get(`items?id=${id}`);
  },
  getItems(): any {
    return instance.get(`items`);
  },
  removeItem(id: number): any {
    return instance.delete(`items/${id}`);
  },
  postItem(item: any): any {
    return instance.post('items/', item)
  },
  updateItems(id: number, item: ItemType): any {},
};
