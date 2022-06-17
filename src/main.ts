import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { TroisJSVuePlugin } from 'troisjs';

import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(TroisJSVuePlugin);

app.mount('#app');
