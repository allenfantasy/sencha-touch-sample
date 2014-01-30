//@charset=utf-8
Ext.require('Ext.TitleBar');
Ext.application({
  name: 'MyApp',
  requires: ['Ext.TabPanel', 'Ext.Carousel', 'Ext.MessageBox'],

  launch: function() {
    var myTitleBar = Ext.create('Ext.TitleBar', {
      id: 'mytitlebar',
      //docked: 'top',
      title: '我的标题条',
      items: [
        {
          text: '按钮一'
        },
        {
          text: '按钮二',
          align: 'right'
        }
      ]
    });
    var myPanel = Ext.create('Ext.Panel', {
      id: 'mypanel',
      items: [myTitleBar],
      html: '测试面板'
    });
    Ext.Viewport.add(myPanel);
  }
});
