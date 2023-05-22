import Vue from "vue";
import Vuex from "vuex";

// Importing modules from store
import categories from "./modules/categories";
import news from "./modules/news";
import events from "./modules/events";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    categories,
    news,
    events,
    users,
  },
});
