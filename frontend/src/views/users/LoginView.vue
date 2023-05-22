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
import { mapActions } from "vuex";
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
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"],
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
    ...mapActions({
      loginUser: "users/loginUser",
    }),
    submitForm(formName) {
      try {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const payload = {
              email: this.user.email,
              password: this.user.password,
            };

            try {
              await this.loginUser(payload);
            } catch (error) {
              this.$notify.error({
                title: "Error",
                message: error?.message,
              });
              return;
            }

            this.$notify({
              title: "Success",
              message: "You are logged in successfully",
              type: "success",
            });

            this.$router.push({ name: "news" });

            this.user.email = "";
            this.user.password = "";
          } else {
            this.$notify.error({
              title: "Error",
              message: "Login failed. Please try again",
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
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
