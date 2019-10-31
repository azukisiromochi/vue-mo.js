import Vue from "vue";
import App from "./App.vue";

import Vuemo from "@/plugins/vuemo.js";
Vue.use(Vuemo);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
