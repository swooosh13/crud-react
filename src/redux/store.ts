import {combineReducers, createStore, applyMiddleware} from "redux";
import itemsReducer from './items-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  items: itemsReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
