var backendDomain = 'http://localhost:9292'
Ext.require(['Ext.form.Panel', 'Ext.form.FieldSet']);
Ext.application({
  name: 'MyApp',
  requires: ['Ext.TabPanel', 'Ext.Carousel', 'Ext.MessageBox'],
  models: ['User'],

  launch: function() {
    var nameTextfield = {
      xtype: 'textfield',
      id: 'txt_username',
      name: 'username',
      label: '姓名',
      placeHolder: '请输入姓名',
      value: 'Allen',
      required: true,
      clearIcon: true,
      listeners: {
        change: function(item, newValue, oldValue) {
          console.log('修改前的值为' + oldValue);
          console.log('修改后的值为' + newValue);
        }
      }
    };
    var ageSpinner = {
      xtype: 'spinnerfield',
      id: 'txt_age',
      name: 'age',
      label: '年龄',
      minValue: 0,
      maxValue: 100,
      stepValue: 1,
      cycle: true,
    };
    var genderRadio = {
      xtype: 'fieldset',
      id: 'txt_gender_fieldset',
      title: '选择性别',
      items: [{
        xtype: 'radiofield',
        id: 'txt_gender_male',
        name: 'gender',
        value: 'male',
        label: '男性',
        checked: true,
        listeners: {
          check: function(item, elem) { console.log("选取男性"); }
        }
      },
      {
        xtype: 'radiofield',
        id: 'txt_gender_female',
        name: 'gender',
        label: '女性',
        value: 'female',
        listeners: {
          check: function(item, elem) { console.log("选取女性"); }
        }
      }]
    };
    var email = {
      xtype: 'emailfield',
      id: 'txt_email',
      label: '邮箱',
      name: 'email',
      placeHolder: '请输入邮箱',
      clearIcon: true
    };
    var password = {
      xtype: 'passwordfield',
      id: 'txt_password',
      name: 'password',
      label: '密码',
      placeHolder: '请输入密码',
      clearIcon: true,
      //disabled: true,
    };
    var hobbyCheckbox = {
      xtype: 'fieldset',
      id: 'txt_hobby_fieldset',
      title: '你的爱好',
      items: [
        {
          xtype: 'checkboxfield',
          id: 'txt_hobby_sport',
          name: 'hobby',
          label: '体育',
          value: 'sport',
          checked: true
        },
        {
          xtype: 'checkboxfield',
          id: 'txt_hobby_movie',
          name: 'hobby',
          label: '电影',
          value: 'movie',
          checked: true
        },
        {
          xtype: 'checkboxfield',
          id: 'txt_hobby_music',
          name: 'hobby',
          label: '音乐',
          value: 'music',
          checked: false
        },
      ]
    };
    var careerSelect = {
      xtype: 'selectfield',
      id: 'career_select',
      name: 'career',
      label: '职业',
      options: [
        {
          text: '攻城狮',
          value: '0'
        },
        {
          text: '射鸡湿',
          value: '1'
        },
        {
          text: 'CEO',
          value: '2'
        },
      ],
      listeners: {
        change: function(select, newValue, oldValue) {
          switch(newValue) {
            case '1':
              Ext.Msg.alert("你好攻城狮");
              break;
            case '2':
              Ext.Msg.alert("你好射鸡湿");
              break;
            case '3':
              Ext.Msg.alert("你好CEO大人");
              break;
          }
        }
      }
    };
    var formPanel = Ext.create('Ext.form.Panel', {
      id: 'formPanel',
      url: backendDomain + '/foo', // Sinatra app
      baseCls: 'bgPink',
      standardSubmit: true,
      //cls: 'smallfont',
      scrollable: 'vertical', // horizontal, both, false
      items: [
        {
          xtype: 'fieldset',
          title: '注册',
          instructions: '请填写注册信息',
          defaults: {
            labelwidth: '20%'
          },
          items: [nameTextfield, ageSpinner, genderRadio, hobbyCheckbox, careerSelect, email, password]
        },
        {
          xtype: 'panel',
          layout: {
            type: 'hbox',
            pack: 'end',
          },
          defaults: {
            xtype: 'button',
            cls: 'normal_btn',
          },
          items: [
            {
              text: '提交',
              ui: 'confirm',
              handler: function() {
                var params = formPanel.getValues();
                var user = Ext.create('MyApp.model.User', params);
                var errors = user.validate();
                params.hobby = Ext.encode(params.hobby);
                if (errors.isValid()) {
                  Ext.Ajax.request({
                    url: backendDomain + '/foo',
                    method: 'POST',
                    params: params,
                    success: function(res, opts){
                      var result = eval('(' + res.responseText + ')');
                      if (result.success) {
                        Ext.Msg.alert("注册成功!");
                      } else {
                        Ext.Msg.alert("注册失败!", result.message.join("<br />"));
                      }
                      console.log(result);
                    },
                    failure: function(res, opts) {
                      //var message = "";
                      //Ext.each(errors.items, function(rec){
                        //message += rec.getMessage() + "<br />";
                      //});
                      //Ext.Msg.alert('提交失败!', message);
                      Ext.Msg.alert("提交失败!");
                      var result = eval('(' + res.responseText + ')');
                      console.log(result);
                    }
                  });
                  //formPanel.submit({
                    //success: function(form, result) {
                      //Ext.Msg.alert('成功!', '表单提交成功!');
                      //console.log(result);
                    //},
                    //faliure: function (form, result) {
                      //var message = "";
                      //Ext.each(errors.items, function(rec){
                        //message += rec.getMessage() + "<br />";
                      //});
                      //Ext.Msg.alert('提交失败!', message);
                    //}
                  //});
                } else {
                  var message = "";
                  Ext.each(errors.items, function(rec){
                    message += rec.getMessage() + "<br />";
                  });
                  Ext.Msg.alert('验证失败!', message);
                }
              }
            },
            {
              text: '重置',
              ui: 'action',
              handler: function() {
                formPanel.reset();
              }
            },
            {
              ui: 'action',
              text: '预置数据',
              handler: function() {
                var user = Ext.create('MyApp.model.User', {
                  username: 'Nicole',
                  gender: 'female',
                  password: 'nicole',
                  age: 23,
                  email: 'nicole.s@gmail.com',
                  hobby: ['music', 'movie'],
                  career: '3'
                });
                formPanel.setRecord(user);
              }
            },
            {
              ui: 'action',
              text: '获取用户',
              handler: function() {
                Ext.Ajax.request({
                  url: backendDomain + '/users/first',
                  method: 'GET',
                  success: function(res, opts) {
                    var result = eval('(' + res.responseText + ')');
                    result.user.hobby = result.user.hobby.split(',');
                    if (result.success) {
                      Ext.Msg.alert('成功获取用户', result.user.username);
                      console.log(result);
                      var user = Ext.create('MyApp.model.User', result.user)
                      formPanel.setRecord(user);
                    } else {
                      Ext.Msg.alert('无法获取用户');
                      console.log(result);
                    }
                  },
                  faliure: function(res, opts) {
                    Ext.Msg.alert('获取请求失败!');
                  }
                });
              }
            },
            {
              ui: 'action',
              text: '更新用户',
              handler: function() {
                Ext.Ajax.request({
                  url: backendDomain + '/users/first',
                  method: 'PUT',
                  params:
                })
              }
            }
          ]
        }
      ],
      // THERE'S A BUG IF WE HAVE RADIO BOX
      //listeners: {
        //submit: function(form, result) {
          //Ext.Msg.alert('提交成功');
          //console.log(result);
        //},
        //exception: function(form, result) {
          //Ext.Msg.alert('提交失败');
          //console.log(result);
        //}
      //}
    });
    Ext.Viewport.add(formPanel);
    //formPanel.innerItems[0].getComponent('txt_gender_fieldset').getComponent('txt_gender_male').setGroupValue('female');
    //formPanel.getScrollable().getScroller().setFps(100);
    //formPanel.getScrollable().getScroller().scrollTo(0,200);
    //formPanel.getScrollable().getScroller().scrollToEnd();
  }
});
