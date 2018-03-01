import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import axios from '@/js/ajax';
import cache from '@/js/cache';
import isPc from '@/js/setRem';

window.$pc = isPc;
window.$axios = axios;
window.$cache = cache;

ReactDOM.render(<App />, document.getElementById('app'));