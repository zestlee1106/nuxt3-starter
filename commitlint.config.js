module.exports = {
  rules: {
    'required-issue-number': [2, 'always'], // 0:off, 1:warning, 2:error
  },
  plugins: [
    {
      rules: {
        'required-issue-number': ({ header: commitMsg }) => {
          const regCommitSubject = /\[.*?\]/
          const regIssueNumber = /\w{3,4}-\d+/g
          if (regCommitSubject.test(commitMsg) && regIssueNumber.test(commitMsg))
            return [true, '커밋 성공!']
          else return [false, '이슈 번호를 포함해야 합니다.']
        },
      },
    },
  ],
}
