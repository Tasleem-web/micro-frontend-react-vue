import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import store from './store'
import routes from "./routes";

createApp(App)
    .use(routes)
    .use(store)
    .mount('#app');

// https://getbootstrap.com/docs/5.0/components/alerts/