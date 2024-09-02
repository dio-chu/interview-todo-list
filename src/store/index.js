import { createStore } from "vuex";
import example from "./modules/example";

const store = createStore({
  modules: {
    example,
  },
});

export default store;
