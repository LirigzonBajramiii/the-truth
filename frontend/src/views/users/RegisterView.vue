<template>
  <div>
    <el-form
      :model="newUser"
      :rules="rules"
      ref="newUser"
      label-width="120px"
      class="demo-ruleForm register-container"
    >
      <h3 class="register-title">Register</h3>
      <!-- First name -->
      <el-form-item label="First name" prop="firstName">
        <el-input v-model="newUser.firstName"></el-input>
      </el-form-item>

      <!-- Last Name -->
      <el-form-item label="Last name" prop="lastName">
        <el-input v-model="newUser.lastName"></el-input>
      </el-form-item>

      <!-- Email -->
      <el-form-item label="Email" prop="email">
        <el-input type="email" v-model="newUser.email"></el-input>
      </el-form-item>

      <!-- Password -->
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="newUser.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          v-loading="loading"
          customClass="loadingMin"
          @click="submitForm('newUser')"
          >Register</el-button
        >
        <el-button @click="resetForm('newUser')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "register-view",
  data() {
    return {
      newUser: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      loading: false,
      rules: {
        firstName: [
          {
            required: true,
            message: "Please enter your first name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 100,
            message: "Length should be 3 to 100",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Please enter your last name",
            trigger: "blur",
          },
        ],
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
      registerUser: "users/registerUser",
    }),
    submitForm(formName) {
      try {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const payload = {
              email: this.newUser.email,
              password: this.newUser.password,
              firstName: this.newUser.firstName,
            };

            this.loading = true;
            await this.registerUser(payload);
            this.loading = false;

            this.$notify({
              title: "Success",
              message: "You are registered successfully",
              type: "success",
            });

            this.newUser.email = "";
            this.newUser.password = "";
            this.newUser.firstName = "";
            this.newUser.lastName = "";

            this.$router.push({ name: "login" });
          } else {
            this.$notify.error({
              title: "Error",
              message: "Register failed. Please try again",
            });
            this.loading = false;
            return false;
          }
        });
      } catch (error) {
        console.log(error);
        this.loading = false;
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
.register-container {
  max-width: 600px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 42px 32px;
  margin: 90px auto;
  border-radius: 9px;
}

.register-title {
  text-align: center;
  margin-bottom: 22px;
}
</style>
