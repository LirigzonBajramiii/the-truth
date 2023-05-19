// import services
import CategoryService from "@/services/categories/CategoryService";

export default {
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
};
