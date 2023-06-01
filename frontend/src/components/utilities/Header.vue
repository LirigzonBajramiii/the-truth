<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" align="center">
      <b-navbar-brand>
        <router-link to="/news">
          <h3 class="logo">The Truth</h3>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
        style="justify-content: end; align-items: center"
      >
        <b-navbar-nav>
          <!-- <li>
          <router-link to="/">Home</router-link>
        </li> -->
          <b-nav-item>
            <li>
              <router-link to="/news">News</router-link>
            </li>
          </b-nav-item>
          <b-nav-item>
            <li>
              <router-link to="/news/shendetesi">Shendetesi</router-link>
            </li>
          </b-nav-item>

          <b-nav-item>
            <li>
              <router-link to="/news/sport">Sport</router-link>
            </li>
          </b-nav-item>

          <b-nav-item>
            <li>
              <router-link to="/news/ekonomi">Ekonomi</router-link>
            </li>
          </b-nav-item>

          <b-nav-item>
            <li>
              <router-link to="/news/teknologji">Teknologji</router-link>
            </li>
          </b-nav-item>
          <!-- <b-nav-item>
            <li v-if="user?.role.admin">
              <router-link to="/news/allNews">All News</router-link>
            </li></b-nav-item
          > -->
          <b-nav-item>
            <li>
              <router-link to="/events">Events</router-link>
            </li></b-nav-item
          >
          <!-- <b-nav-item>
            <li v-if="user?.role.admin">
              <router-link to="/categories">Categories</router-link>
            </li>
          </b-nav-item> -->
          <b-nav-item
            ><li v-if="user?.role.admin">
              <router-link to="/admin-dashboard">Admin Dashboard</router-link>
            </li>
          </b-nav-item>
          <b-nav-item>
            <li v-if="!user">
              <router-link to="/login">Login</router-link>
            </li>
          </b-nav-item>
          <b-nav-item
            ><li v-if="!user">
              <router-link to="/register">Register</router-link>
            </li>
          </b-nav-item>
          <b-nav-item
            ><li v-if="user">
              <p style="margin: 0px">
                | Welcome, <strong> {{ user?.displayName }} </strong>
              </p>
            </li>
          </b-nav-item>
          <b-nav-item>
            <li>
              <el-button v-if="user" @click="logOutHandler" plain
                >Logout</el-button
              >
            </li>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
  width: 100%;
  height: auto;
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
  text-decoration: none;
}

a {
  text-decoration: none;
}

::v-deep .nav-item {
  text-decoration: none;
  color: #fff;
}

.navbar-brand a {
  text-decoration: none;
  margin-bottom: 0px;
}

.nav-link a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
}

.navbar-nav {
  align-items: center;
}
</style>
