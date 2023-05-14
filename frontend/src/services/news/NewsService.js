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
};
