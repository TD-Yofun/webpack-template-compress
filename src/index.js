import Vue from "vue";
import router from "./router";
import "@babel/polyfill";

import App from "./App.vue";

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
