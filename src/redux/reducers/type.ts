
export enum authTypes {
  LOGIN = "LOGIN",
  RETREIVE_TOKEN = "RETREIVE_TOKEN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT"
}

export enum ItemsActionTypes {
  FETCH_ITEMS = "FETCH_ITEMS",
  ADD_ITEM = "ADD_ITEM",
  DELETE_ITEM = "DELETE_ITEM",
  UPDATE_ITEM = "UPDATE_ITEM",
  CLEAR_ITEMS = "CLEAR_ITEMS",
  TOGGLE_SHOW_MODAL = "TOGGLE_SHOW_MODAL",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_PER_PAGE = "SET_PER_PAGE"
}

export type ItemType = {
  id: number;
  name: string;
  description: string;
  sector: string;
  position: string;
};