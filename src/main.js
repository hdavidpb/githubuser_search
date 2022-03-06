import { createApp } from "vue";
import { store } from "./vuex/store";
import dayjs from "dayjs";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import App from "./App.vue";

const app = createApp(App);
app.config.globalProperties.$dayjs = dayjs;
app.use(store);

const toastOptions = {
  position: "top-right",
  timeout: 1676,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};
app.use(Toast, toastOptions);
app.mount("#app");
