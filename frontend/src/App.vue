<template>
  <div>
    <Header></Header>

    <!-- router-view shfaq contentin qe e permbane nje view  -->
    <div class="container">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/utilities/Header.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { mapMutations, mapState } from "vuex";
import Footer from "@/components/utilities/Footer.vue";

// import db from "@/firebase/db";
// import { getDoc, doc } from "firebase/firestore";
export default {
  name: "app-view",
  components: {
    Header,
    Footer,
  },
  methods: {
    ...mapMutations({
      SET_USER: "users/SET_USER",
    }),
  },
  computed: {
    ...mapState({
      user: (state) => state.users.user,
    }),
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // const roleDocRef = doc(db, "roles", user.uid);
        // const roleDocSnapshot = await getDoc(roleDocRef);

        // let userRole = null;

        // if (roleDocSnapshot.exists()) {
        //   const roleData = roleDocSnapshot.data();
        //   userRole = roleData.role;
        // }

        // const userWithRole = {
        //   ...user,
        //   role: userRole,
        // };

        const response = localStorage.getItem("user");
        const userWithRole = JSON.parse(response);
        this.SET_USER(userWithRole);
      }

      console.log("from ap", this.user);
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@300;400;500;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  font-family: "Montserrat", sans-serif;
}

.container {
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
}

a {
  text-decoration: none !important;
}
</style>
