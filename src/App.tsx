import React, { useEffect } from 'react';

import './App.css';
import Main from './components/Main/Main';
import store from './redux/store';
import {Provider, useDispatch} from 'react-redux';
import {loadItems} from './redux/items-reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch])

  return (
      <Main />
  );
}

let MainApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>  
  )
}

export default MainApp;
