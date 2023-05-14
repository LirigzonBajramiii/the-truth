import apiCaller from "../apiCaller";

export default {
  getCategories() {
    return apiCaller.get("/api/categories");
  },
  postCategory(newCategory) {
    return apiCaller.post("/api/categories/create", newCategory);
  },
};
