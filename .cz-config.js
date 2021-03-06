module.exports = {
  // type ç±»å
  types: [
    { value: 'WIP', name: 'ð§  WIP:            å¼åä¸­' },
    { value: 'feat', name: 'â¨  feat:           ä¸ä¸ªæ°ç¹æ§' },
    { value: 'improvement', name: 'â  improvement:    å¯¹ç°æç¹æ§çæå' },
    { value: 'fix', name: 'ð  fix:            ä¿®å¤Bug' },
    { value: 'refactor', name: 'ð    refactor:       ä»£ç éæï¼æ³¨æåç¹æ§ãéæåºåå¼' },
    { value: 'docs', name: 'ð  docs:           åæ´ææ¡£' },
    { value: 'test', name: 'ð  test:           ä¿®æ¹ææ·»å æµè¯æä»¶' },
    { value: 'config', name: 'ð  config:         ä¿®æ¹ææ·»å éç½®æä»¶' },
    { value: 'style', name: 'ð  style:          ä¿®æ¹æ ¼å¼ï¼ä¸å½±ååè½ï¼ä¾å¦ç©ºæ ¼ãä»£ç æ ¼å¼ç­' },
    { value: 'perf', name: 'ð  perf:           æ§è½æå' },
    { value: 'ci', name: 'ð§  ci:             ä¿®æ¹ciç¸å³éç½®ãèæ¬ç­' },
    { value: 'revert', name: 'âª  revert:         åéçæ¬' },
    {
      value: 'chore',
      name: 'ð¯   chore:          æå¡ï¼ä¸å±äºä»¥ä¸ç±»åï¼ä¾å¦run buildãå¼å¥ææ´æ°è½¯ä»¶åç­',
    },
  ],

  // è¦åæç¤ºçä¿¡æ¯
  messages: {
    type: 'éæ©ä¸ç§ä½ çæäº¤ç±»å:',
    scope: 'éæ©ä¿®æ¹æ¶åèå´ (å¯é):',
    // used if allowCustomScopes is true
    customScope: 'è¯·è¾å¥æ¬æ¬¡æ¹å¨çèå´ï¼å¦ï¼åè½ãæ¨¡åç­ï¼:',
    subject: 'ç®ç­è¯´æ:\n',
    body: 'è¯¦ç»è¯´æï¼ä½¿ç¨"|"åéå¼å¯ä»¥æ¢è¡(å¯é)ï¼\n',
    breaking: 'éå¼å®¹æ§ï¼ç ´åæ§ååè¯´æ (å¯é):\n',
    footer: 'å³èå³é­çissueï¼ä¾å¦ï¼#31, #34(å¯é):\n',
    confirmCommit: 'ç¡®å®æäº¤è¯´æ?',
  },

  scopes: [{ name: 'æ¨¡å1' }, { name: 'æ¨¡å2' }, { name: 'æ¨¡å3' }, { name: 'æ¨¡å4' }],

  // æ¯å¦åè®¸èªå®ä¹å¡«å scope ï¼è®¾ç½®ä¸º true ï¼ä¼èªå¨æ·»å ä¸¤ä¸ª scope ç±»å [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
  allowCustomScopes: true,
  // ä»å¨featãfixæ¶å¡«åç ´åæ§æ´æ¹
  allowBreakingChanges: ['feat', 'fix'],
  // è¡¨ç¤ºè¦è·³è¿åªäºæ­¥éª¤
  skipQuestions: ['body', 'breaking', 'footer'],
  // subject éå¶é¿åº¦
  subjectLimit: 100,
  breaklineChar: '|', // è®¾ç½®bodyåfooterä¸­çæ¢è¡ç¬¦
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
};
