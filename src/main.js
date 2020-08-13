import Vue from "vue";
import App from "./App.vue";
import Like from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component("LikeN", Like);

new Vue({
  render: h => h(App)
}).$mount("#app");

// new Vue({
//   render: function(h) {
//     return h(App);
//   }
// }).$mount("#app");
