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
    // 保存用户信息
    SAVE_UERINFO(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
}

export default user;