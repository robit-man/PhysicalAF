import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { TroisJSVuePlugin } from 'troisjs';

import App from './App.vue';
import router from './router/index.js';
import VueQrcodeReader from "vue-qrcode-reader";

const app = createApp(App);

app.use(VueQrcodeReader);
app.use(createPinia());
app.use(router);
app.use(TroisJSVuePlugin);

app.mount('#app');
