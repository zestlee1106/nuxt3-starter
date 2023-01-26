import { defineNuxtPlugin } from '#app'
import { useUserStore } from '~/store/user'

export default defineNuxtPlugin(async (nuxtApp) => {
  const userStore = useUserStore()
  const data = {
    username: 'test',
    password: 'test',
  }
  userStore.setUser(data)
})
