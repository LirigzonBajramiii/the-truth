import apiCaller from "../apiCaller";

export default {
  getNews() {
    return apiCaller.get("/api/news/list");
  },
  postNews(payload) {
    return apiCaller.post("/api/news/create", payload);
  },
  getSingleNews(id) {
    return apiCaller.get(`/api/news/list/${id}`);
  },
  deleteNews(id) {
    return apiCaller.delete(`/api/news/list/${id}`);
  },
  editNews(id, payload) {
    return apiCaller.put(`/api/news/list/${id}`, payload);
  },
};
