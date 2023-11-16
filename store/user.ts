import type { UserState } from '@/types/user'
import auth from '@/services/auth'

type LoginPayload = {
  username: string
  password: string
}

export const useUserStore = defineStore({
  id: 'user-store',
  state: (): UserState => {
    return {
      userInfo: {},
      menuList: {},
    }
  },
  getters: {
    user: (state: UserState) => {
      return {
        info: state.userInfo,
        menu: state.menuList,
      }
    },
  },
  actions: {
    async setUser(payload: LoginPayload) {
      const { username, password } = payload
      const { data } = await auth.postLogin(username, password)
      console.log(
        '%c 🤩🤩🤩 user log data: ',
        'font-size: x-large; color: #bada55;',
        '',
        data.value
      )

      this.userInfo = data.value
    },
  },
})
