// import { BASE_PER_FIX_KEY } from '@/utils/basePer'
// import { setLocalStorage, getLocalStorage } from '@/utils/session'
import {
  Message
} from 'element-ui'

const user = {
  state: {
    userInfo: {
      userName:""
    }
  },

  mutations: {
    // 设置侧边栏折叠
    // 保存用户信息
    SAVE_UERINFO(state, userInfo) {
      state.user.userInfo = userInfo;
    }
  },
}

export default user;