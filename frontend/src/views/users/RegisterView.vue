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
        <el-button type="primary" @click="submitForm('newUser')"
          >Register</el-button
        >
        <el-button @click="resetForm('newUser')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
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
      rules: {
        firstName: [
          {
            required: true,
            message: "Please enter your first name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
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
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // Regjistrimi i userit permes firebase/auth
          const auth = getAuth();

          const response = await createUserWithEmailAndPassword(
            auth,
            this.newUser.email,
            this.newUser.password
          );

          await updateProfile(response.user, {
            displayName: this.newUser.firstName,
          });

          await signOut(auth);

          this.$router.push({ name: "login" });

          console.log(response);
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
