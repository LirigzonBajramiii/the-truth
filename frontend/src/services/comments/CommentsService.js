import apiCaller from "../apiCaller";

export default {
  getComments() {
    return apiCaller.get("/api/comments");
  },
  postComment(payload) {
    return apiCaller.post("/api/comments/create", payload);
  },
};
