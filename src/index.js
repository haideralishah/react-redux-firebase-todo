import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import Routes from './Routes.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './modules';



ReactDOM.render(
  <Provider store={createStore(reducer)} >
    {Routes}
  </Provider >,
  document.getElementById('root')
);
