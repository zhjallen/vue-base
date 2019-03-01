<template>
  <transition name="scale-left">
    <div class="sidebar" :class="{ open: sidebarState.isOpen }" :style="{background: systemThemeColor}">
      <!-- <div class="logo">System LOGO</div> -->
      <div class="slide-handler fdddfont icon-tuozhuai" @click="slideSidebar" />
      <VuePerfectScrollbar :settings="scrollOption">
        <el-menu mode="vertical" class="vertical-menu" :default-active="$route.path" :router="true" :background-color="systemThemeColor"
          :collapse="!sidebarState.isOpen" text-color="#bfcbd9">
          <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
        </el-menu>
      </VuePerfectScrollbar>
    </div>
  </transition>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  // import SidebarMenuItem from './SidebarMenuItem'
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  import "../styles/sidebar.scss";

  export default {
    name: 'Sidebar',
    components: {
      // SidebarMenuItem,
      VuePerfectScrollbar
    },
    data() {
      return {
        scrollOption: {
          suppressScrollX: true
        }
      }
    },
    computed: {
      ...mapGetters(['sidebarState', 'systemTheme']),
      // 这里必须根据条件结合ElementUI的sidebar来调整颜色,保证自定义主题和sidebar的内置颜色一致.
      systemThemeColor: function () {
        switch (this.systemTheme) {
          case 'batman':
          case 'belles':
            return '#37474F'
          default:
            return '#304156'
        }
      }
    },
    methods: {
      slideSidebar() {
        this.$store.dispatch('collapseSidebar', !this.sidebarState.isOpen)
      }
    }, 
  }
</script>

<!-- <style lang="scss" scoped>
  $sidebar-background-color: #304156;

  .sidebar {
    display: flex;
    flex-direction: column;
    flex: none;
    transition: all .3s ease-in-out 0s;
    overflow: hidden;

    .slide-handler {
      padding: 3px 0;
      /* background: mix($base-white-color, $sidebar-background-color, 8%); */
      text-align: center;
      /* color: $base-light-color; */
      cursor: pointer;
    }

    .logo {
      padding: 10px 0;
      color: #fff;
      font-size: 1.6rem;
      font-weight: 300;
      display: inherit;
      /* @include flexCenter; */
      /* background-color:darken($sidebar-background-color,8%); */
    }

    // sidebar menu css override
    .vertical-menu:not(.el-menu--collapse) {
      width: 180px;
      border-right: none;
    }

    .el-menu--collapse i {
      font-size: 1.6rem;
    }
  }
</style> -->