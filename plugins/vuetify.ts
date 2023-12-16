import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({});
  app.vueApp.use(vuetify);
});
