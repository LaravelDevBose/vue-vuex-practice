import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

import { store } from './store/store';

import 'vuetify/dist/vuetify.min.css'
new Vue({
  store:store,
  el: '#app',
  render: h => h(App)
})
