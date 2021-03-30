import React from 'react';

import './App.css';
import Main from './components/Main/Main';
import store from './redux/store';
import {Provider} from 'react-redux';

function App() {

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
