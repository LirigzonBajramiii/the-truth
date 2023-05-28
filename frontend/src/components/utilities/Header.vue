<template>
  <div>
    <nav class="nav-container">
      <router-link to="/news">
        <h3 class="logo">The Truth</h3>
      </router-link>
      <ul class="nav-list">
        <!-- <li>
          <router-link to="/">Home</router-link>
        </li> -->
        <li>
          <router-link to="/news">News</router-link>
        </li>
        <li>
          <router-link to="/news/shendetesi">Shendetesi</router-link>
        </li>
        <li>
          <router-link to="/news/sport">Sport</router-link>
        </li>
        <li>
          <router-link to="/news/ekonomi">Ekonomi</router-link>
        </li>
        <li>
          <router-link to="/news/teknologji">Teknologji</router-link>
        </li>
        <li v-if="user?.role.admin">
          <router-link to="/news/allNews">All News</router-link>
        </li>
        <li>
          <router-link to="/events">Events</router-link>
        </li>
        <li v-if="user?.role.admin">
          <router-link to="/categories">Categories</router-link>
        </li>
        <!-- <li>
          <router-link to="/about">About</router-link>
        </li> -->
        <!-- <li v-if="user?.role.admin">
          <router-link to="/create/news">Create News</router-link>
        </li>
        <li v-if="user?.role.admin">
          <router-link to="/create/events">Create Events</router-link>
        </li>
        <li v-if="user?.role.admin">
          <router-link to="/create/category">Create Category</router-link>
        </li> -->
        <li v-if="user?.role.admin">
          <router-link to="/admin-dashboard">Admin Dashboard</router-link>
        </li>
        <li v-if="!user">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="!user">
          <router-link to="/register">Register</router-link>
        </li>
        <li v-if="user">
          <p>
            | Welcome, <strong> {{ user?.displayName }} </strong>
          </p>
        </li>
        <li>
          <el-button v-if="user" @click="logOutHandler" plain>Logout</el-button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "header-component",
  computed: {
    ...mapState({
      user: (state) => state.users.user,
    }),
  },
  methods: {
    ...mapActions({
      logOut: "users/logOut",
    }),
    ...mapMutations({
      SET_USER: "users/SET_USER",
    }),
    logOutHandler() {
      this.SET_USER(null);
      this.$router.push({ name: "login" });
      this.logOut();

      this.$notify({
        title: "Success",
        message: "You are logged out successfully",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #30476d;
  color: #fff;
  padding: 20px 40px;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-list li {
  list-style: none;
}

.nav-list li a {
  color: #fff;
  text-decoration: none;
}

.logo {
  color: #fff;
}

a {
  text-decoration: none;
}
</style>
