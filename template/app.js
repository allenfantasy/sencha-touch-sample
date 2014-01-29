//@charset=utf-8
Ext.application({
  name: 'MyApp',
  requires: ['Ext.TabPanel', 'Ext.Carousel', 'Ext.MessageBox'],

  launch: function() {
    var formPanel = Ext.create('Ext.form.Panel', {
      url: "http://localhost:9292/foo",
      waitMsg: 'Sending...',
      method: 'POST',
      items: [
        {
          xtype: 'radiofield',
          name: 'gender',
          label: 'male',
          value: 'male',
          checked: true
        },
        {
          xtype: 'radiofield',
          name: 'gender',
          label: 'female',
          value: 'female'
        },
        {
          xtype: 'button',
          text: 'SUBMIT',
          handler: function() {
            //formPanel.submit();
            Ext.Ajax.request({
              url: 'http://localhost:9292/foo',
              params: formPanel.getValues(),
              success: function(res, opts) {
                Ext.Msg.alert("提交成功!");
                var result = eval('(' + res.responseText + ')')
                console.log(result);
              },
              failure: function(res, opts) {
                Ext.Msg.alert("提交失败!");
                var result = eval('(' + res.responseText + ')')
                console.log(result);
              }
            });
          }
        }
      ],
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
  }
});
