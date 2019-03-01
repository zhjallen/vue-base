import Cookie from 'vue-cookie'
// import { BASE_PER_FIX_KEY } from '@/utils/basePer'
// import { setLocalStorage, getLocalStorage } from '@/utils/session'
import {
  Message
} from 'element-ui'

const SIDEBAR_EXPANDED_WIDTH = '180px' // 展开宽度
const SIDEBAR_COLLAPSED_WIDTH = '60px' // 折叠宽度
const HEADER_HEIGHT = '35px' // 头部(header)高度
const TAGTAB_HEIGHT = '30px' // 标签页(tagTabs)高度
// 侧边栏隐藏状态
// const SIDEBAR_HIDDEN_STATE = Cookie.get(`${BASE_PER_FIX_KEY}_sidebar_hidden_state`)
// // 侧边栏折叠状态
// const SIDEBAR_OPEN_STATE = Cookie.get(`${BASE_PER_FIX_KEY}_sidebar_open_state`)

const layout = {
  state: {
    sidebarState: {
      isHidden: 'true',
      isOpen: 'false', // 边栏折叠状态
      width: '0px'
    },
    tagTabState: {
      openTags: [], // 打开的标签页
    },
    systemTheme: 'chalk',
    // shortcutMenu: getLocalStorage(`${BASE_PER_FIX_KEY}_shortcut_menu`) || [], // 自定义菜单项,由用户自定义出的菜单项
    windowMaxState: false, // 最大化操作区域(因此顶部header)的显示状态,该属性一般在展示地图等时使用
    headerHeight: HEADER_HEIGHT, // 头部(header)高度
    tagTabHeight: TAGTAB_HEIGHT //  标签页(tagTabs)高度
  },

  mutations: {
    // 设置侧边栏折叠
    SET_COLLAPSE_SIDEBAR(state, sidebarStatus) {
      state.sidebarState.isOpen = sidebarStatus
      state.sidebarState.width = sidebarStatus ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH
      Cookie.set(`sidebar_open_state`, sidebarStatus, 60)
    },
    // 设置侧边栏隐藏
    SET_HIDDEN_SIDEBAR(state, isHidden) {
      state.sidebarState.isHidden = isHidden
      // 为了保证隐藏动效,这里设置sidebar隐藏后的宽度
      // 这里因为计算的原因,必须保证为 {string} 0px, 请勿修改成 {number} 0
      state.sidebarState.width = isHidden ? '0px' : SIDEBAR_OPEN_STATE === 'true' ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH
      Cookie.set(`${BASE_PER_FIX_KEY}_sidebar_hidden_state`, isHidden, 1000)
    },
    // 设置最大化操作区域(隐藏顶部)
    SET_WINDOW_MAXIMIZE(state, isMaxWindow) {
      state.windowMaxState = isMaxWindow
    },
    // 设置主题
    SET_THEME(state, theme) {
      state.systemTheme = theme
    },
    ADD_TAG(state, tag) {
      if (state.tagTabState.openTags.some(v => v.path === tag.path)) {
        return;
      }
      state.tagTabState.openTags.push(tag)
      // if (route.name && route.meta && !route.meta.noCache) {
      //   state.cachedViews.push(route.name)
      // }
    },
    // 移除浏览记录路由对象
    REMOVE_TAG(state, tag) {
      // 处理visitedViews
      // for (const [i, v] of state.visitedViews.entries()) {
      //   if (v.path === route.path) {
      //     state._theNextView = (i < state.visitedViews.length - 1) ? state.visitedViews[i + 1] : null
      //     state.visitedViews.splice(i, 1)
      //     break
      //   }
      // }
      state.tagTabState.openTags = state.tagTabState.openTags.filter(item => item.path !== tag.path);
      // 处理cachedViews
      // for (const i of state.cachedViews) {
      //   if (i === route.name) {
      //     const idx = state.cachedViews.indexOf(i)
      //     state.cachedViews.splice(idx, 1)
      //     break
      //   }
      // }
    },
  },
}

export default layout