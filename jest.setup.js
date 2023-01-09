import VueTestUtils from "@vue/test-utils";

// Mock Nuxt components
VueTestUtils.config.global.stubs["NuxtLink"] = VueTestUtils.RouterLinkStub;
