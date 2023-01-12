import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import Header from "../Header.vue";

describe("Header 테스트", () => {
  const wrapper = shallowMount(Header);

  it('"Home" 이라는 텍스트가 있다', () => {
    expect(wrapper.text()).toContain("Home");
  });

  describe("홈으로 가는 NuxtLink 가 있다", () => {
    const NuxtLink = wrapper.findAllComponents(RouterLinkStub);

    it("NuxtLink 가 총 1개 있어야 한다.", () => {
      expect(NuxtLink.length).toBe(1);
    });

    it("첫 번째 NuxtLink 일 때, to props 가 / 로 되어있어야 한다. ", () => {
      const HomeNuxtLink = NuxtLink[0];
      expect(HomeNuxtLink.props("to")).toEqual("/");
    });
  });
});
