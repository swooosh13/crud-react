import {combineReducers, createStore, applyMiddleware} from "redux";
import itemsReducer from './items/items-reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from "./auth/auth-reducer";

let reducers = combineReducers({
  items: itemsReducer,
  auth: authReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
