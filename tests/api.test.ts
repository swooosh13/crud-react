import axios, { AxiosResponse } from "axios";
import { itemsAPI } from "../src/api/api";
import { IItems, ItemType } from "../src/redux/items-reducer";

describe("itemsAPI test response", () => {
  it("response array length", async () => {
    let response = await itemsAPI
      .getItem(1)
      .then((response: any) => response.data);
    expect(response.length).toBe(1);
  });

  it("response byItemId equals object", async () => {
    let response: IItems = await itemsAPI
      .getItem(0)
      .then((response: any) => response.data);

    let expected: ItemType = {
      id: 0,
      name: "mk-255",
      description: "Моторный блок",
      position: [{sector: "B", cell: 224}]
    }
    let received: ItemType = response[0];
    expect(received).toStrictEqual(expected);
  });
  
  it("getItems length", async () => {
    let response: IItems = await itemsAPI
      .getItems()
      .then((response: any) => response.data);
    
    expect(response.length).toBe(2);
  });
});