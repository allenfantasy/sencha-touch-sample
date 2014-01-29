Ext.define('MyApp.model.User', {
  extend: 'Ext.data.Model',
  config: {
    fields: [
      'username', 'gender', 'email', 'password',
      { name: 'age', type: 'int' },
      'hobby', 'career'
    ],
    validations: [
      // presence, length, inclusion, exclusion, format, email
      {
        type: 'presence',
        field: 'name',
        message: '请输入姓名'
      },
      {
        type: 'exclusion',
        field: 'name',
        list: [ 'admin', 'administrator', '管理员' ],
        message: '不能使用这个姓名'
      },
      {
        type: 'length',
        field: 'age',
        max: 2,
        message: '请输入有效年龄'
      },
      {
        type: 'format',
        field: 'age',
        matcher: /^\+?[1-9][0-9]$/,
        message: '请输入有效年龄'
      },
      {
        type: 'inclusion',
        field: 'sex',
        list: ['male', 'female'],
        message: '请选择性别'
      },
      {
        type: 'email',
        field: 'email',
        message: '请输入有效的Email地址'
      },
      {
        type: 'presence',
        field: 'password',
        message: '请输入密码'
      },
      {
        type: 'length',
        field: 'password',
        min: 7,
        message: '密码长度必须超过6位',
      },
      //{
        //type: 'format',
        //field: 'url',
        //matcher: /^http:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/
      //}
    ]
  }
});
