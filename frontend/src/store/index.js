import Vue from "vue";
import Vuex from "vuex";

// import services
import CategoryService from "@/services/categories/CategoryService";

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
      // OLD way
      // const response = await fetch("http://localhost:3000/api/categories");
      // const categories = await response.json();
      // console.log(categories);

      // New way
      try {
        const categories = await CategoryService.getCategories();
        commit("SET_CATEGORIES", categories.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
