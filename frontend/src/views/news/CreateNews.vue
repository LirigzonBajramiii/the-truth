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
              :label="category.title"
              :value="category.title"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Image" prop="imageUrl">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            action="http://localhost:3000/api/upload"
            :on-success="handleAvatarSuccess"
          >
            <img
              v-if="ruleForm.imageUrl"
              :src="ruleForm.imageUrl"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
import NewsService from "@/services/news/NewsService.js";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        title: "",
        author: "",
        desc: "",
        category: "",
        imageUrl: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: "Please input news title",
            trigger: "blur",
          },
          {
            min: 3,
            max: 200,
            message: "Length should be 3 to 200",
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
        imageUrl: [
          {
            required: true,
            message: "Please upload an image",
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
            imageUrl: this.ruleForm.imageUrl,
          };

          // OLD way
          // console.log("payload frontend", payload);
          // const response = await fetch(
          //   "http://localhost:3000/api/news/create",
          //   {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify(payload),
          //   }
          // );

          // const newNews = await response.json();

          // console.log(newNews);

          // New Way
          try {
            const newPost = await NewsService.postNews(payload);
            console.log(newPost);
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
        this.ruleForm.title = "";
        this.ruleForm.author = "";
        this.ruleForm.desc = "";
        this.ruleForm.category = "";
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleAvatarSuccess(res, file) {
      const formData = new FormData();
      formData.append("file", file.raw);

      fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          this.ruleForm.imageUrl = data.imageUrl;
          console.log(this.ruleForm.imageUrl);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    ...mapActions({
      fetchCategories: "categories/fetchCategories",
    }),
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
    }),
  },
  beforeMount() {
    this.fetchCategories();
  },
};
</script>

<style scoped>
.form-container {
  width: 748px;
  margin: 0px auto;
}

::v-deep .avatar-uploader .el-upload {
  border: 1px dashed #ccc;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-color: #fff;
}
::v-deep .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
::v-deep .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
::v-deep .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
