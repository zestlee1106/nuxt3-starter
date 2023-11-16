import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header 測試', () => {
  const wrapper = shallowMount(Header)

  describe('NuxtLink 的模擬測試組件建立', () => {
    // findAllComponents 是 Vue Test Units 所提供的方法
    // RouterLinkStub 是一個 stub 組件，也是由 Vue Test Units 提供，用來替代 nuxtLink
    // Stub 組件類似真實的組件，但其沒有實際的渲染行為，通常只在測試使用
    const NuxtLink = wrapper.findAllComponents(RouterLinkStub)

    it('NuxtLink 目前為2個', () => {
      expect(NuxtLink.length).toBe(2)
    })

    it('確認 NuxtLink, to props 是連到路徑 /one . ', () => {
      const HomeNuxtLink = NuxtLink[0]
      expect(HomeNuxtLink.props('to')).toEqual('/one')
    })
    it('確認 NuxtLink, to props 是連到路徑 /two . ', () => {
      const HomeNuxtLink = NuxtLink[1]
      expect(HomeNuxtLink.props('to')).toEqual('/two')
    })
  })

  describe('用戶更改主題色.', () => {
    // const IS_DARK_MODE = true
    // it('預設為 dark mode.', () => {
    //   const isDark = wrapper.vm.isDark
    //   expect(isDark).toEqual(IS_DARK_MODE)
    // })
    // it('按下主題色切換按鈕，將會調用主題色切換函式一次.', async () => {
    //   const changeTheme = jest.spyOn(wrapper.vm, 'changeTheme')
    //   const changeThemeButton = wrapper.find('[data-test="changeThemeButton"]')
    //   await changeThemeButton.trigger('click')
    //   expect(changeTheme).toBeCalled()
    //   wrapper.unmount()
    // })
    // it('調用主題切換函式後，主題色會發生變化', async () => {
    //   await wrapper.vm.changeTheme()
    //   expect(wrapper.vm.isDark).toEqual(!IS_DARK_MODE)
    //   wrapper.vm.$destroy()
    // })
    // it("如果主題色切換函式被切換兩次，主題色會恢復初始狀態", () => {
    //   const changeTheme = jest.spyOn(wrapper.vm, "changeTheme");
    //   wrapper.vm.changeTheme();
    //   wrapper.vm.changeTheme();
    //   expect(changeTheme).toBeCalledTimes(2);
    //   expect(wrapper.vm.isDark).toEqual(IS_DARK_MODE);
    //   wrapper.vm.$destroy();
    // });
  })
})
