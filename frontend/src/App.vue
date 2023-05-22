<template>
  <div>
    <Header></Header>

    <!-- router-view shfaq contentin qe e permbane nje view  -->
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/utilities/Header.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { mapMutations } from "vuex";
export default {
  name: "app-view",
  components: {
    Header,
  },
  methods: {
    ...mapMutations({
      SET_USER: "users/SET_USER",
    }),
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.SET_USER(user);
      }
    });
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.container {
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
}
</style>
