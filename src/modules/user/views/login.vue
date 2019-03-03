<template>
  <div class="main">
    <canvas v-show="false" id="loginAni"></canvas>
    <div class="logo">
      <!-- <img src="../../../../../assets/logo.png" alt="">-->
      <span>红星云供</span>
    </div>
    <div class="login-wrapper">
      <!-- <div class="img">
        <img src="../../../../../assets/img.png" alt="">
      </div>-->
      <div class="login-block">
        <div class="sys-logo">密码登录</div>
        <span v-show="loginFail">登录失败</span>
        <el-form
          class="login-form"
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          size="medium"
        >
          <el-form-item prop="userAccount">
            <el-input
              class="login-input"
              type="text"
              v-model="loginForm.userAccount"
              placeholder="用户名"
              clearable
            >
              <i slot="prefix" class="fdddfont icon-personstalker"></i>
            </el-input>
          </el-form-item>

          <el-form-item prop="userPassword">
            <el-input
              class="login-input"
              type="password"
              v-model="loginForm.userPassword"
              @keyup.enter.native="login('loginForm')"
              placeholder="密码"
              clearable
            >
              <i slot="prefix" class="fdddfont icon-password"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <div style="margin-top:8px;">
              <el-button
                class="login-button"
                type="primary"
                :loading="isLoginning"
                :disabled="isLoginning"
                @click="login('loginForm')"
              >登录</el-button>
              <!-- <el-button @click="resetForm('loginForm')">重置</el-button> -->
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { startAnimation } from "./loginAni";
import "../styles/login.scss";
import actions from "../store/actions.js";
export default {
  name: "Login",
  data() {
    return {
      isLoginning: false,
      loginFail: false,
      loginForm: {
        userAccount: "",
        userPassword: ""
      },
      loginRules: {
        userAccount: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        userPassword: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    startAnimation("loginAni");
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isLoginning = true;
          this.loginFail = false;
          this.$store
            .dispatch("userLogin", this.loginForm)
            .then(successData => {
              console.log(successData, "succ");
              this.isLoginning = false;
              this.$router.replace({name:"layout"})
            })
            .catch(error => {
              this.isLoginning = false;
              this.loginFail = true;
              console.log(error);
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>