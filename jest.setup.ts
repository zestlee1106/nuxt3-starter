import { RouterLinkStub, config } from "@vue/test-utils";
import * as vue from "vue";
import * as pinia from "pinia";

config.global.stubs.NuxtLink = RouterLinkStub;

interface IGlobal {
  [key: string]: any;
}

// auto import 해 주는 것들을 global 로 주입시켜버린다 (Jest 에서는 하나하나 넣어줘야 하기 때문)
for (const key of Object.keys(vue))
  (global as IGlobal)[key] = (vue as IGlobal)[key];
for (const key of Object.keys(pinia))
  (global as IGlobal)[key] = (pinia as IGlobal)[key];
