describe('auth 플러그인 로드', () => {
  it('auth 검사', () => {
    /**
     *
     * 쿠키를 검사한다
     * 쿠키가 있으면 token 을 가져온다
     * token 이 있으면 해당 값을 까서 jwt 파싱을 한다
     * jwt 의 만료일로 access token, refresh token 을 만료 옵션을 넣어 저장한다
     * ====
     * 쿠키가 없으면
     * 구 어드민의 로그인 페이지로 리다이렉트한다
     * ====
     *
     */
    expect(true)
  })
})
