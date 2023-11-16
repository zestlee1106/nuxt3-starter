export default defineNuxtRouteMiddleware((to, from) => {
  console.log('router middleware', new Date())
})
