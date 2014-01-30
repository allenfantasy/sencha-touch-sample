//@charset=utf-8
Ext.application({
  name: 'MyApp',
  requires: ['Ext.TabPanel', 'Ext.Carousel', 'Ext.MessageBox'],

  launch: function() {
    //var data = {
      //string_value: '模板的初始文字'
    //};

    //var tpl = new Ext.XTemplate(
      //'<table>',
      //'<tr>',
      //'<td>{ string_value }</td>',
      //'</tr>',
      //'</table>'
    //);

    //var tplHtml = tpl.apply(data);
    //var myToolbar = Ext.create('Ext.Toolbar', {
      //docked: 'top',
      //items: [
        //{
          //text: '替换模板',
          //handler: function() {
            //var newData = {
              //string_value: '替换后的文字'
            //};
            //tpl.overwrite(Ext.get('subPanel'), newData);
          //}
        //}
      //]
    //});

    //var myPanel = Ext.create('Ext.Panel', {
      //items: [
        //myToolbar, {
          //id: 'subPanel',
          //xtype: 'panel',
          //html: tplHtml
        //}
      //]
    //});

    var company = {
      name: '东西科技',
      email: 'hi@dxhackers.com',
      address: 'Anywhere',
      city: '广州市',
      province: '广东省',
      zip: '510000',
      employer: [
        { name: 'J.L', age: 23, hobby: ['Sport', 'Reading'] },
        { name: 'Water', age: 22, hobby: ['Sport', 'Reading'] },
        { name: 'Allen', age: 23, hobby: ['Sport', 'Coding'] },
      ]
    };

    var tpl = new Ext.XTemplate(
      '<p>公司: </p>',
      '<tpl for=".">',
        '名称: {name}<br />',
        '<p>员工: </p>',
        '<tpl for="employer">',
          '<p>{#}. 姓名: {name}, 年龄: {age}</p>',
          '<p>',
          '<tpl for="hobby">',
            '<tpl if="xindex&gt;1">',
              ',',
            '</tpl>',
            '{.}',
          '</tpl>',
          '({[values.hobby.length]}项)',
          '</p>',
        '</tpl>',
      '</tpl>'
    )

    var tplHtml = tpl.apply(company);
    var myPanel = Ext.create('Ext.Panel', { html: tplHtml });
    Ext.Viewport.add(myPanel);
  }
});
