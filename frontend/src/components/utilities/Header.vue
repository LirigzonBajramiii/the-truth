<template>
  <div>
    <nav class="nav-container">
      <h3 class="logo">The Truth</h3>
      <ul class="nav-list">
        <li> 
          <router-link to="/">Home</router-link>   
        </li>
        <li> 
          <router-link to="/news">News</router-link>   
        </li>
        <li> 
          <router-link to="/events">Events</router-link>   
        </li>
        <li> 
          <router-link to="/about">About</router-link>   
        </li>
        <li> 
          <router-link to="/login">Login</router-link>   
        </li>
        <li> 
          <router-link to="/register">Register</router-link>   
        </li>

      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "header-component",
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
  gap: 20px;
}

.nav-list li {
  list-style: none;
}

.nav-list li a{
  color: #fff;
  text-decoration: none;
}

</style>
