import { createStore } from "vuex";
import interview from "./modules/interview";
import modal from "./modules/modal";
const store = createStore({
  modules: {
    interview,
    modal,
  },
});

export default store;
