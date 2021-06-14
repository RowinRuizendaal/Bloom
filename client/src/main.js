import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import VueTour from "vue-tour";

require("vue-tour/dist/vue-tour.css");
// use to overwrite vue-tour for now
import "@/assets/scss/main.scss";

Vue.use(VueTour);

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: SocketIO("http://localhost:5000"),
  }),
  require("moment-timezone")
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
