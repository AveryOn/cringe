import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index";
import components from "./components/UI";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as vuetifyComponents from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as icons from '@mdi/font/css/materialdesignicons.css';



const vuetify = createVuetify({
    components: vuetifyComponents,
    directives,
    icons,
})

const app = createApp(App);
const pinia = createPinia();

components.forEach((component) => {
    app.component(component.compName, component);
});

app
    .use(pinia)
    .use(router)
    .use(vuetify)
    .mount("#app");
