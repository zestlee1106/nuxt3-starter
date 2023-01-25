export default defineEventHandler(({ req, res, context }) => {
  // store 를 업데이트 해 준다 (user, menu)
  console.log('server 에서 동작', new Date())
})
