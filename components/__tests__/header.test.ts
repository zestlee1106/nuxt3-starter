import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { setup, $fetch } from "@nuxt/test-utils";
import Header from "../Header.vue";

describe("테스트를 위한 테스트", () => {
  it("테스트를 위한 테스트 2", () => {
    shallowMount(Header, {
      stubs: ["nuxt-link", "NuxtLink"],
    });

    expect(true);
  });
});
