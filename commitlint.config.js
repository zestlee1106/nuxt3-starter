module.exports = {
  rules: {
    'required-issue-number': [2, 'always'], // 0:off, 1:warning, 2:error
  },
  plugins: [
    {
      rules: {
        'required-issue-number': ({ header: commitMsg }) => {
          const regCommitSubject = /\[.*?\]/
          if (regCommitSubject.test(commitMsg)) return [true, '커밋 성공!']
          else return [false, '[] 를 포함해서 컨벤션을 맞춰야 합니다.']
        },
      },
    },
  ],
}
