
const code = "body{margin:0;font-family:Arial, Helvetica, sans-serif}.App.svelte-1jnae98{text-align:center}@keyframes svelte-1jnae98-App-logo-spin{from{transform:scale(1)}to{transform:scale(1.06)}}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);