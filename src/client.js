/*
  The client.js file is used only to render index.html for production.
  See index.js to look at what is used during development by snowpack.
*/

import App from './app/App.svelte';

var app = new App({
  target: document.getElementById('app'),
  hydrate: true
});

export default app;
