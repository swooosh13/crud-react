import {AnyAction} from "redux";
import {itemsAPI} from "../../../api/api";
import {AppDispatch} from "../store";
import { ItemsActionTypes, ItemType } from "../type";

export interface IItems extends Array<ItemType> {
}
export interface IItemsReducer {
  allItems: IItems;
  isFetching: boolean;
  showAddModal: boolean;
}

let initialState: IItemsReducer = {
  allItems: [],
  isFetching: false,
  showAddModal: false
};

let itemsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ItemsActionTypes.FETCH_ITEMS:
      return {
        ...state,
        allItems: action.items,
      };

    case ItemsActionTypes.DELETE_ITEM:
      return {
        ...state,
        allItems: state.allItems.filter((item) => item.id !== action.id),
      };

    case ItemsActionTypes.ADD_ITEM:
      return {
        ...state,
        allItems: [...state.allItems, action.item],
      };

    case ItemsActionTypes.UPDATE_ITEM:
      return {
        ...state,
        allItems: state.allItems.filter((item) => {
          if (item.id === action.id) {
            item.name = action.name;
            item.description = action.description;
            item.position = action.position;
          }
          return item;
        }),
      };
    case ItemsActionTypes.TOGGLE_SHOW_MODAL:
      return {
        ...state,
        showAddModal: !state.showAddModal
      }
    case ItemsActionTypes.CLEAR_ITEMS:
      return [];
    default:
      return state;
  }
};

export default itemsReducer;
