import axios from "axios";
import { ItemType } from "../redux/reducers/type";

const itemsInstance = axios.create({
  withCredentials: true,
  baseURL: "https://cell-mock-api.herokuapp.com/",
});

export const itemsAPI = {
  getItem(id: number): any {
    return itemsInstance.get(`items?id=${id}`);
  },
  getItems(): any {
    return itemsInstance.get(`items`);
  },
  getItemsByName(name: string): any {
    return itemsInstance.get(`items?name=${name}`);
  },
  getItemsByNameAndDescription(name:string, description: string): any {
    return itemsInstance.get(`items?name=${name}&description=${description}`)
  },
  removeItem(id: number): any {
    return itemsInstance.delete(`items/${id}`);
  },
  postItem(item: any): any {
    return itemsInstance.post('items/', item)
  },
  updateItems(id: number, item: ItemType): any {},
};

const authInstance = axios.create({
  withCredentials: true,
  baseURL: ""
})

export const authAPI = {
  login(email: string, password: string): string {
    return "";
  }
}