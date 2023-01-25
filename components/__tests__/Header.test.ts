import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('Header 테스트', () => {
  const wrapper = shallowMount(Header)

  describe('NuxtLink 가 있다', () => {
    const NuxtLink = wrapper.findAllComponents(RouterLinkStub)

    it('NuxtLink 가 총 2개 있어야 한다.', () => {
      expect(NuxtLink.length).toBe(2)
    })

    it('첫 번째 NuxtLink 일 때, to props 가 /one 로 되어있어야 한다. ', () => {
      const HomeNuxtLink = NuxtLink[0]
      expect(HomeNuxtLink.props('to')).toEqual('/one')
    })
    it('두 번째 NuxtLink 일 때, to props 가 /two 로 되어있어야 한다. ', () => {
      const HomeNuxtLink = NuxtLink[1]
      expect(HomeNuxtLink.props('to')).toEqual('/two')
    })
  })

  describe('사용자는 테마를 바꿀 수 있다.', () => {
    // const IS_DARK_MODE = true
    // it('아무것도 하지 않았다면, 테마는 다크모드 상태이다.', () => {
    //   const isDark = wrapper.vm.isDark
    //   expect(isDark).toEqual(IS_DARK_MODE)
    // })
    // it('테마 바꾸기 버튼을 1번 누르면, 테마 바꾸는 함수를 1번 호출한다.', async () => {
    //   const changeTheme = jest.spyOn(wrapper.vm, 'changeTheme')
    //   const changeThemeButton = wrapper.find('[data-test="changeThemeButton"]')
    //   await changeThemeButton.trigger('click')
    //   expect(changeTheme).toBeCalled()
    //   wrapper.unmount()
    // })
    // it('테마 바꾸는 함수를 호출하면, 테마 상태가 바뀐다.', async () => {
    //   await wrapper.vm.changeTheme()
    //   expect(wrapper.vm.isDark).toEqual(!IS_DARK_MODE)
    //   wrapper.vm.$destroy()
    // })
    // it("테마 바꾸는 함수를 2번 호출하면, 테마 상태가 원래대로 돌아온다", () => {
    //   const changeTheme = jest.spyOn(wrapper.vm, "changeTheme");
    //   wrapper.vm.changeTheme();
    //   wrapper.vm.changeTheme();
    //   expect(changeTheme).toBeCalledTimes(2);
    //   expect(wrapper.vm.isDark).toEqual(IS_DARK_MODE);
    //   wrapper.vm.$destroy();
    // });
  })
})
