<template>
  <div>
    <el-form
      :model="user"
      :rules="rules"
      ref="user"
      label-width="120px"
      class="demo-ruleForm login-container"
    >
      <h3 class="login-title">Login</h3>
      <!-- Email -->
      <el-form-item label="Email" prop="email">
        <el-input type="email" v-model="user.email"></el-input>
      </el-form-item>

      <!-- Password -->
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="user.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('user')">Login</el-button>
        <el-button @click="resetForm('user')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login-view",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please enter your email",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please enter your password",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.user);
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
.login-container {
  max-width: 600px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 42px 32px;
  margin: 90px auto;
  border-radius: 9px;
}

.login-title {
  text-align: center;
  margin-bottom: 22px;
}
</style>
