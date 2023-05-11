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
            >Create</el-button
          >
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
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
          const response = await fetch(
            "http://localhost:3000/api/categories/create",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            }
          );
          const newCategory = await response.json();

          console.log(newCategory);
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
};
</script>

<style scoped></style>
