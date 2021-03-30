import {combineReducers, createStore} from "redux";
import itemsReducer from './items-reducer';

let reducers = combineReducers({
  items: itemsReducer
})

const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
