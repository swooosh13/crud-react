import { itemsAPI } from "../../../api/api";
import { AppDispatch } from "../store";
import { ItemsActionTypes } from "../type";

export const getItemById = (val: number) => async (dispatch: AppDispatch) => {
  let response = await itemsAPI
    .getItem(val)
    .then((response: any) => response.data);
  dispatch({ type: ItemsActionTypes.FETCH_ITEMS, items: response });
};

export const loadItems = () => async (dispatch: AppDispatch) => {
  let response;
  try {
    console.log("loadItems(): AC");
    response = await itemsAPI.getItems().then((response: any) => response.data);
  } catch (e) {
    console.log(e);
    return;
  }

  dispatch({ type: ItemsActionTypes.FETCH_ITEMS, items: response });
};

export const loadItemsByName = (name: string) => async (
  dispatch: AppDispatch
) => {
  let response;
  try {
    console.log("loadItemsByName(): AC");
    response = await itemsAPI
      .getItemsByName(name)
      .then((response: any) => response.data);
  } catch (e) {
    console.log(e);
  }

  dispatch({ type: ItemsActionTypes.FETCH_ITEMS, items: response });
};

export const loadItemsByNameAndDescription = (
  name: string,
  description: string
) => async (dispatch: AppDispatch) => {
  let response;
  try {
    console.log("loadItemsByNameAndDescription(): AC");
    response = await itemsAPI
      .getItemsByNameAndDescription(name, description)
      .then((response: any) => response.data);
  } catch (e) {
    console.log(e);
  }

  dispatch({ type: ItemsActionTypes.FETCH_ITEMS, items: response });
};

export const clearItems = () => (dispatch: AppDispatch) => {
  dispatch({ type: ItemsActionTypes.CLEAR_ITEMS });
};

export const removeItem = (id: number) => async (dispatch: AppDispatch) => {
  await itemsAPI.removeItem(id).then((response: any) => response.data);

  dispatch({ type: ItemsActionTypes.DELETE_ITEM, id });
};

export const toggleAddModal = () => (dispatch: AppDispatch) => {
  dispatch({ type: ItemsActionTypes.TOGGLE_SHOW_MODAL });
};
