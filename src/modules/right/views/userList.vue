<template>
  <div class="userList">
    <el-form :inline="true" :model="formUserSearch" size="small" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="formUserSearch.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
       <el-input v-model="formUserSearch.phone" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formUserSearch.email" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- <div class="operatin">
      <el-button size="small">导入</el-button>
    </div> -->
    <el-table :data="userList" stripe>
      <el-table-column prop="index" type="index" label="编号" width="180"></el-table-column>
      <el-table-column prop="userName" label="用户名" width="180"></el-table-column>
      <el-table-column prop="phone" label="电话" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { getUserList } from "../api/user";
export default Vue.extend({
  data() {
    return {
      userList: [],
      formUserSearch: {
        userName: "",
        phone: "",
        email: ""
      }
    };
  },
  methods: {
    onSubmit: function() {
      console.log(this.formUserSearch, "forminlie");
    }
  },
  mounted: function() {
    getUserList({}).then(successData => {
      if (successData.data) {
        this.userList = successData.data;
      }
      console.log(successData, "data");
    });
  }
});
</script>

