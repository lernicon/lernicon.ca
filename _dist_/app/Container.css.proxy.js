
const code = "div.svelte-uw5dw2{height:100vh;width:100vw;display:flex;align-items:center;justify-content:center}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);