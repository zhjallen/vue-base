<template>
  <div class="header">
    <div class="user">
      <ul>
        <li>
          <el-dropdown size="small">
            <span class="el-icon-setting">赵会杰</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="modifyPassword">修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  import "../styles/header.scss";
  import {
    mapGetters
  } from 'vuex'

  // import PersonalSetting from './Settings'
  // import HeaderShortcut from './HeaderShortcut'

  // api
  // import { commonLogout } from '@/api/my'

  export default {
    name: 'Headers',
    data() {
      return {
        dayTime: '',
        commonDialog: null
      }
    },
    computed: {
      ...mapGetters(['userName'])
    },
    mounted() {
      const now = parseInt(moment().format('HH'))
      if (now < 12) this.dayTime = '早上'
      else if (now >= 12 && now < 18) this.dayTime = '下午'
      else if (now >= 18 && now <= 23) this.dayTime = '晚上'
      else this.dayTime = ''
    },
    methods: {
      settingPersonal() {
        this.$router.push({
          name: 'PersonalSettings'
        })
      },
      modifyPassword() {
        this.$router.replace({
          path: '/modify-password'
        })
      },
      logout() {
        this.$confirm('确认要登出系统吗？', '提醒', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          commonLogout({
            token: this.token
          }).then(res => {
            this.$store.dispatch('userLogout').then(() => {
              location.reload()
            })
          })
        }).catch(() => {})
      }
    },
    components: {
      // PersonalSetting,
      // HeaderShortcut
    }
  }
</script>