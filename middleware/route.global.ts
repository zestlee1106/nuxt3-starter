export default defineNuxtRouteMiddleware((to, from) => {
  // 모듈 내용을 변수에 선언
  console.log('router middleware', new Date())
})
