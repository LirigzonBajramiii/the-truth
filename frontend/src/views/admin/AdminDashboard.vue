<template>
  <div>
    <div class="dashboard-container">
      <div class="operations">
        <AdminOperations></AdminOperations>
      </div>

      <div class="view-operations">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AdminOperations from "@/views/admin/AdminOperations.vue";
export default {
  name: "admin-dashboard",
  components: {
    AdminOperations,
  },
};
</script>

<style scoped>
.dashboard-container {
  display: grid;
  grid-template-columns: 2fr 7fr;
  gap: 42px;
  background-color: #f1f3f5;
  padding: 12px;
  border-radius: 9px;
  /* height: 100%; */
}

.operations {
  padding: 3px 6px;
  height: auto;
  border-right: 4px solid #fff;
}

.view-operations {
  padding: 3px 6px;
}
</style>
