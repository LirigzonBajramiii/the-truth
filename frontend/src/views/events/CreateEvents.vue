<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm create-event-form"
    >
      <el-form-item label="Event name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Event time" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="Pick a date"
              v-model="ruleForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="Pick a time"
              v-model="ruleForm.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="Description" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Create</el-button
        >
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
import EventsService from "@/services/events/EventsService.js";
export default {
  name: "create-events",
  data() {
    return {
      ruleForm: {
        name: "",
        date1: "",
        date2: "",
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Event name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 200,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "blur",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "blur",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input event description",
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
            name: this.ruleForm.name,
            date1: this.ruleForm.date1,
            date2: this.ruleForm.date2,
            desc: this.ruleForm.desc,
          };
          try {
            const newPost = await EventsService.postEvent(payload);
            console.log(newPost);
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("error submit");
          return false;
        }
        this.ruleForm.name = "";
        this.ruleForm.date1 = "";
        this.ruleForm.date2 = "";
        this.ruleForm.desc = "";
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.create-event-form {
  margin: 0 auto;
  width: 60%;
}
</style>
