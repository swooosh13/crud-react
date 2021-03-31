import axios, { AxiosResponse } from "axios";
import { IItems } from "../redux/items-reducer";

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
  }
};

