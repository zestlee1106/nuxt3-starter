import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import Header from "../Header.vue";

describe("Header 테스트", () => {
  const wrapper = shallowMount(Header, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  });

  it("헤더에 NuxtLink 가 총 3개 있어야 한다.", async () => {
    const NuxtLink = wrapper.findAllComponents(RouterLinkStub);

    expect(NuxtLink.length).toBe(3);
  });
  it("home NuxtLink 에는 to props 로 / 가 되어있어야 한다. ", async () => {
    const HomeNuxtLink = wrapper.findComponent('[data-testid="home"]');

    expect(HomeNuxtLink.props("to")).toEqual("/");
  });
  it("one NuxtLink 에는 to props 로 / 가 되어있어야 한다. ", async () => {
    const OneNuxtLink = wrapper.findComponent('[data-testid="one"]');

    expect(OneNuxtLink.props("to")).toEqual("/one");
  });
  it("two NuxtLink 에는 to props 로 / 가 되어있어야 한다. ", async () => {
    const TwoNuxtLink = wrapper.findComponent('[data-testid="two"]');

    expect(TwoNuxtLink.props("to")).toEqual("/two");
  });
});
