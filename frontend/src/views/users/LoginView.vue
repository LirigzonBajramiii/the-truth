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
        <el-button
          v-loading="loading"
          customClass="loadingMin"
          type="primary"
          @click="submitForm('user')"
          >Login</el-button
        >
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
      loading: false,
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
              this.loading = true;
              await this.loginUser(payload);
              this.loading = false;
            } catch (error) {
              this.$notify.error({
                title: "Error",
                message: error?.message,
              });
              this.loading = false;
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
            this.loading = false;
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
:deep(.el-loading-spinner .circular) {
  height: 25px;
  width: 25px;
}

:deep(.el-loading-spinner .path) {
  stroke: #fff;
}

:deep(.el-loading-mask) {
  background-color: #409eff;
}

:deep(.el-loading-spinner) {
  transform: translateY(40%);
  border: none;
  /* margin-bottom: 7px; */
}
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
