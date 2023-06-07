<template>
  <div>
    <div v-if="loading" class="loading" v-loading="loading"></div>
    <div v-if="!loading">
      <el-input
        class="search"
        placeholder="Search users by email..."
        v-model="search"
      ></el-input>

      <div v-for="(user, index) in filteredUsers" :key="index">
        <div class="user">
          <div>
            <p>Email: {{ user.email }}</p>
            <p>
              Role: <strong> {{ user.role.user ? "user" : "admin" }} </strong>
            </p>
          </div>
          <el-button
            class="delete-user"
            type="danger"
            @click="deleteUser(user.id)"
            >Delete User</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import db from "@/firebase/db";
export default {
  name: "users-view",
  data() {
    return {
      users: [],
      loading: false,
      search: "",
    };
  },
  computed: {
    filteredUsers() {
      if (this.search) {
        return this.users.filter((user) =>
          user?.email?.toLowerCase().includes(this.search)
        );
      }
      return this.users;
    },
  },
  methods: {
    async deleteUser(userId) {
      const documentToRemove = doc(db, "roles", userId);
      await deleteDoc(documentToRemove);
      this.users = this.users.filter((user) => user.id !== userId);
    },
  },
  async beforeMount() {
    try {
      this.loading = true;
      const snapshots = await getDocs(collection(db, "roles"));
      let usersArr = [];
      snapshots.forEach((snapshot) =>
        usersArr.push({ id: snapshot.id, ...snapshot.data() })
      );
      this.users = usersArr;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.search {
  margin-bottom: 22px;
}
.loading {
  margin: auto auto;
  height: 600px;
}
.user {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  padding: 12px;
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-user {
  height: 100%;
}
</style>
