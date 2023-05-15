import apiCaller from "../apiCaller";

export default {
  getEvents() {
    return apiCaller.get("/api/events/list");
  },
  postEvent(payload) {
    return apiCaller.post("/api/events/create", payload);
  },
  getEvent(id) {
    return apiCaller.get(`/api/events/list/${id}`);
  },
};
