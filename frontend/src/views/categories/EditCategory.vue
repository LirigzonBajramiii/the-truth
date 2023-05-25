<template>
  <div>
    <div class="category-container">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Category title" prop="categoryTitle">
          <el-input v-model="ruleForm.categoryTitle"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >Edit</el-button
          >
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import CategoryService from "@/services/categories/CategoryService.js";
export default {
  name: "create-category",
  data() {
    return {
      ruleForm: {
        categoryTitle: "",
      },
      rules: {
        categoryTitle: [
          {
            required: true,
            message: "Please input Category title",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const payload = {
            title: this.ruleForm.categoryTitle,
          };
          // OLD way
          // const response = await fetch(
          //   "http://localhost:3000/api/categories/create",
          //   {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify(payload),
          //   }
          // );
          // const newCategory = await response.json();

          // console.log(newCategory);

          // New way
          try {
            const id = this.$route.params.id;
            const updatedCategory = await CategoryService.editCategory(
              id,
              payload
            );
            console.log(updatedCategory);
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  async beforeMount() {
    const id = this.$route.params.id;
    const response = await CategoryService.getCategory(id);
    const data = await response.data;
    console.log(data);

    this.ruleForm.categoryTitle = data[0].title;
  },
};
</script>

<style scoped></style>
