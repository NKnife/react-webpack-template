import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '@/App';
import reducer from '@/store/reducer'
import axios from '@/js/ajax';
import cache from '@/js/cache';
import isPc from '@/js/setRem';

window.$pc = isPc;
window.$axios = axios;
window.$cache = cache;

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'));