<template>
  <div>
    <div>
      <h3 class="cat-title">Categories</h3>
      <div>
        <div v-for="category in categories" :key="category._id">
          <div class="categories">
            <h4>{{ category.title }}</h4>
            <div>
              <el-button type="warning" @click="editCategory(category._id)"
                >Edit</el-button
              >
              <el-button type="danger" @click="deleteCategory(category._id)"
                >Delete</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryService from "@/services/categories/CategoryService";
import { mapActions, mapState } from "vuex";
export default {
  name: "CategoriesList",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
    }),
  },
  methods: {
    ...mapActions({
      fetchCategories: "categories/fetchCategories",
    }),
    async editCategory(id) {
      this.$router.push({ name: "editCategory", params: { id: id } });
    },
    async deleteCategory(id) {
      await CategoryService.deleteCategory(id);
      this.categories = this.categories.filter((item) => item._id !== id);
      this.fetchCategories();
    },
  },
  beforeMount() {
    this.fetchCategories();
  },
};
</script>

<style scoped>
.categories {
  display: flex;
  justify-content: space-between;

  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 22px;
  margin-bottom: 22px;
}

.cat-title {
  margin-bottom: 32px;
}
</style>
