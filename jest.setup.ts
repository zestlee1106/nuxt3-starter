import { RouterLinkStub, config } from '@vue/test-utils'
import * as vue from 'vue'
import * as pinia from 'pinia'

config.global.stubs.NuxtLink = RouterLinkStub // 這行將全局的 NuxtLink 替換成測試組件 stub

interface IGlobal {
  [key: string]: any
}

// auto import 全局注入 Vue, Pinia 的內容 ( 因為在 Jest 中需要逐個添加 ) 以方便後續測試的取用
for (const key of Object.keys(vue))
  (global as IGlobal)[key] = (vue as IGlobal)[key]
for (const key of Object.keys(pinia))
  (global as IGlobal)[key] = (pinia as IGlobal)[key]
