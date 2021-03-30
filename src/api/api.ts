import axios from "axios";
import { IItems } from "../redux/items-reducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://cell-mock-api.herokuapp.com/'
});

export const itemsAPI = {
  getItems(id: number) {
    return instance.get(`items?id=${id}`);
  }
};
