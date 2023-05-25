import apiCaller from "../apiCaller";

export default {
  getCategories() {
    return apiCaller.get("/api/categories");
  },
  postCategory(newCategory) {
    return apiCaller.post("/api/categories/create", newCategory);
  },
  editCategory(id, payload) {
    return apiCaller.put(`/api/categories/list/${id}`, payload);
  },
  getCategory(id) {
    return apiCaller.put(`/api/categories/list/${id}`);
  },
  deleteCategory(id) {
    return apiCaller.delete(`/api/categories/list/${id}`);
  },
};
