import { createApp } from 'vue'
import App from './App.vue'

import router from "./router.js"
import "./assets/tailwind.css"

import BaseCard from "./components/UI/BaseCard"
import BaseButton from "./components/UI/BaseButton"

const app = createApp(App)

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.use(router);

app.mount('#app');
