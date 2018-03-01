const width = document.body.clientWidth;
let pc;
if (width > 640) {
  pc = true;
} else {
  pc = false;
  const rem = Math.round(width / 18.75);
  const style = document.createElement('style');
  style.innerHTML = `html,body { font-size: ${rem}px }`
  style.setAttribute('type', 'text/css');
  document.querySelector('head').appendChild(style);
}

export default pc;