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
  deleteEvent(id) {
    return apiCaller.delete(`/api/events/list/${id}`);
  },
  editEvent(id, payload) {
    return apiCaller.put(`/api/events/list/${id}`, payload);
  },
};
