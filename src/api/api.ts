import axios, { AxiosResponse } from "axios";
import { IItems } from "../redux/items-reducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://cell-mock-api.herokuapp.com/",
});

export const itemsAPI = {
  getItems(id: number): IItems {
    let items: IItems = [];

    instance
      .get(`items?id=${id}`)
      .then((response: AxiosResponse<any>) => {
        response.data.forEach((element: any) => {
          items.push(element);
        });
      })
      .catch((error) => {
        console.log(error);
      });

      console.log(items);
      return items;
  },
};


