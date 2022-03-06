import { createStore } from "vuex";
import { useToast } from "vue-toastification";
import axios from "axios";
export const store = createStore({
  state: {
    users: [],
    userData: null,
    loading: false,
  },
  mutations: {},
  actions: {
    async searchUser({ state }, userValue) {
      const toast = useToast();
      try {
        const res = await axios.get(
          `https://api.github.com/users/${userValue}`
        );
        const newUser = res.data;
        state.userData = newUser;
        state.users = [...state.users, newUser];
        console.log(newUser);
      } catch (error) {
        toast.error("This users do not exist!");
        const e = { error };
        console.log(e.error);
      }
    },
  },
});
