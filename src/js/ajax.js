import axios from 'axios';
import qs from 'qs';
import cache from './cache';

const baseURL = window.location.hostname === 'localhost' ? 'http://dev.com' : window.location.origin;
const ajax = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
});

async function buildAjax(obj) {

  if (!obj.method) {
    obj.method = 'post';
  }
  if (!obj.file) {
    obj.data = qs.stringify(obj.data);
  }

  if (cache.localGet('token')) {
    obj.headers = { Authorization: cache.localGet('token')};
  }

  let response;
  let error;
  await ajax(obj).then(res => {
    response = res;
  }).catch(e => {
    error = e.response.status;
  });
  if (!response) {
    return;
  }

  return response.data.data;
}

export default buildAjax;
