// 此文件是用來規範 commit 時的內容訊息
module.exports = {
  rules: { // 規則是否檢核情況
    'required-issue-number': [0, 'always'], // 0:off, 1:warning, 2:error
  },
  plugins: [ // 導入規則處
    {
      rules: { // 自訂規則的寫法
        'required-issue-number': ({ header: commitMsg }) => {
          const regCommitSubject = /\[.*?\]/
          if (regCommitSubject.test(commitMsg)) return [true, 'commit success!']
          else return [false, 'commit 訊息提交應涵蓋 []']
        },
      },
    },
  ],
}
