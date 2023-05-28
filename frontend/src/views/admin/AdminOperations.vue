<template>
  <div>
    <div class="admin-nav">
      <li v-if="user?.role.admin">
        <router-link to="/create/news">Create News</router-link>
      </li>
      <li v-if="user?.role.admin">
        <router-link to="/create/events">Create Events</router-link>
      </li>
      <li v-if="user?.role.admin">
        <router-link to="/create/category">Create Category</router-link>
      </li>
      <li v-if="user?.role.admin">
        <router-link to="/news/allNews">All News</router-link>
      </li>
      <li v-if="user?.role.admin">
        <router-link to="/events">Events</router-link>
      </li>
      <li v-if="user?.role.admin">
        <router-link to="/categories">Categories</router-link>
      </li>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "admin-operations",
  computed: {
    ...mapState({
      user: (state) => state.users.user,
    }),
  },
};
</script>

<style scoped>
.admin-nav li {
  list-style: none;
  margin-bottom: 9px;
}
.admin-nav a {
  text-decoration: none;
  padding: 10px 20px;
  background-color: #30476d;
  color: #fff;
  display: inline-block;
  width: 100%;
  list-style: none;
  border-radius: 5px;
}
</style>
