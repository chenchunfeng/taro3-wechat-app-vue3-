module.exports = {
  // type 类型
  types: [
    { value: 'WIP', name: '🚧  WIP:            开发中' },
    { value: 'feat', name: '✨  feat:           一个新特性' },
    { value: 'improvement', name: '➕  improvement:    对现有特性的提升' },
    { value: 'fix', name: '🐛  fix:            修复Bug' },
    { value: 'refactor', name: '🛠   refactor:       代码重构，注意和特性、重构区分开' },
    { value: 'docs', name: '📚  docs:           变更文档' },
    { value: 'test', name: '🏁  test:           修改或添加测试文件' },
    { value: 'config', name: '📝  config:         修改或添加配置文件' },
    { value: 'style', name: '💅  style:          修改格式，不影响功能，例如空格、代码格式等' },
    { value: 'perf', name: '📈  perf:           性能提升' },
    { value: 'ci', name: '🔧  ci:             修改ci相关配置、脚本等' },
    { value: 'revert', name: '⏪  revert:         回退版本' },
    {
      value: 'chore',
      name: '🗯   chore:          杂务，不属于以上类型，例如run build、引入或更新软件包等',
    },
  ],

  // 覆写提示的信息
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择修改涉及范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '请输入本次改动的范围（如：功能、模块等）:',
    subject: '简短说明:\n',
    body: '详细说明，使用"|"分隔开可以换行(可选)：\n',
    breaking: '非兼容性，破坏性变化说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?',
  },

  scopes: [{ name: '模块1' }, { name: '模块2' }, { name: '模块3' }, { name: '模块4' }],

  // 是否允许自定义填写 scope ，设置为 true ，会自动添加两个 scope 类型 [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
  allowCustomScopes: true,
  // 仅在feat、fix时填写破坏性更改
  allowBreakingChanges: ['feat', 'fix'],
  // 表示要跳过哪些步骤
  skipQuestions: ['body', 'footer'],
  // subject 限制长度
  subjectLimit: 100,
  breaklineChar: '|', // 设置body和footer中的换行符
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
};
