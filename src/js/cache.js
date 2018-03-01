const cache = {
  save(name, value) {
    if (!value) value = '';
    sessionStorage[name] = JSON.stringify(value);
  },
  get(name) {
    if (sessionStorage[name]) {
      return JSON.parse(sessionStorage[name]);
    }
    return false;
  },
  localSave(name, value) {
    if (!value) value = '';
    localStorage[name] = JSON.stringify(value);
  },
  localGet(name) {
    if (localStorage[name]) {
      return JSON.parse(localStorage[name]);
    }
    return false;
  },
  clear(name) {
    sessionStorage.removeItem(name);
    localStorage.removeItem(name);
  },
};
export default cache;
