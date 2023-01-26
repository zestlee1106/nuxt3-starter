import type { UserInfo } from '@/types/user'

export default {
  postLogin: (username: string, password: string) => {
    return useCustomFetch<UserInfo>('/api/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    })
  },
}
