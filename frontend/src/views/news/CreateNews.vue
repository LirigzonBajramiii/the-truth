<template>
  <div>
    <div class="form-container">
      <h3>Create News</h3>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Title" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="Author" prop="author">
          <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>

        <el-form-item label="Description" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>

        <el-form-item label="Category" prop="category">
          <el-select v-model="ruleForm.category" placeholder="Select">
            <el-option
              v-for="(category, index) in categories"
              :key="index"
              :label="category"
              :value="category"
            >
            </el-option>
          </el-select>
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
  data() {
    return {
      ruleForm: {
        title: "",
        author: "",
        desc: "",
        category: "",
      },
      categories: ["Lajme", "Shendetesi", "Sport", "Tjera"],
      rules: {
        title: [
          {
            required: true,
            message: "Please input news title",
            trigger: "blur",
          },
          {
            min: 3,
            max: 50,
            message: "Length should be 3 to 50",
            trigger: "blur",
          },
        ],
        author: [
          {
            required: true,
            message: "Please input author name",
            trigger: "blur",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input description",
            trigger: "blur",
          },
        ],
        category: [
          {
            required: true,
            message: "Please select a category",
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
          //[POST request] Send this data into database using api
          const payload = {
            title: this.ruleForm.title,
            author: this.ruleForm.author,
            desc: this.ruleForm.desc,
            category: this.ruleForm.category,
          };
          console.log("payload frontend", payload);
          const response = await fetch(
            "http://localhost:3000/api/news/create",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            }
          );

          const newNews = await response.json();
          console.log(newNews);
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

<style scoped>
.form-container {
  width: 748px;
  margin: 50px auto;
}
</style>
