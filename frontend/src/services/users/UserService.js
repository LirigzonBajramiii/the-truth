import apiCaller from "../apiCaller";

export default {
  async register(payload) {
    return await apiCaller.post("/api/user/register", payload);
  },
};
