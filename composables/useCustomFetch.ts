import type { UseFetchOptions } from 'nuxt/dist/app/composables'

export default <T>(url: string, options?: UseFetchOptions<any, any, any>) => {
  return useFetch<T>(url, {
    ...options,
    onRequest({ request, options }) {
      // header 設定
      // const headers = new Headers(options.headers);
      // headers.set("Authorization", "Bearer Token");
      // options.headers = headers;
    },
    onRequestError({ request, options, error }) {},
    onResponse({ request, response, options }) {},
    onResponseError({ request, response, options }) {},
  })
}
