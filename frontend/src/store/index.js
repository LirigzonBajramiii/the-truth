import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: null,
  },
  getters: {},
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      const response = await fetch("http://localhost:3000/api/categories");
      const categories = await response.json();
      console.log(categories);
      commit("SET_CATEGORIES", categories);
    },
  },
  modules: {},
});
