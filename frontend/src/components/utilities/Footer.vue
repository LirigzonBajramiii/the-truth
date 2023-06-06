<template>
  <div id="app">
    <footer>
      <div class="footer-links">
        <a href="#">Home</a>
        <a href="#">News</a>
        <a href="#">Categories</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
      <div class="social-media">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>

      <p class="copy-right">
        &copy; 2023 Your News Portal - The truth. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footer-component",
};
</script>

<style>
@import "~@fortawesome/fontawesome-free/css/all.min.css";
footer {
  background-color: #333;
  padding: 20px;
  color: #fff;
  text-align: center;
}

.footer-links a {
  color: #fff;
  margin-right: 10px;
  text-decoration: none;
}

.social-media a {
  color: #fff;
  margin-right: 10px;
  text-decoration: none;
}

.copy-right {
  margin-top: 20px;
}

.social-media i {
  font-size: 20px;
}
</style>
