//@charset utf-8
Ext.application({
  name: 'MyApp',
  icon: 'images/icon.png',
  launch: function() {
    var p1 = Ext.create('Ext.Panel', {
      id: "panel1",
      flex: 1,
      style: 'background-color: purple',
      html: '左容器',
    });
    var p2 = Ext.create('Ext.Panel', {
      id: "panel2",
      flex: 2,
      style: 'background-color: green',
      html: '右容器',
    });
    var panel = Ext.create('Ext.Panel', {
      //id: 'myPanel',
      // fit layout
      //layout: 'fit',
      //items: {
        //style: 'background-color: pink;',
        //html: '示例文字'
      //}

      // card layout
      //layout: {
        //type: 'card',
        //animation: {
          //type: 'slide',
          //direction: 'right',
          //duration: 1000
        //}
      //},
      //items: [p1,p2]

      // vbox / hbox layout
      //layout: {
        //type: 'vbox',
        //align: 'justify'
      //},
      //items: [
        //{
          //flex: 1,
          //html: '子组件1',
          //style: 'background-color: #5E99CC;'
        //},
        //{
          //flex: 2,
          //html: '子组件2',
          //style: 'background-color: #759E60;'
        //}
      //]

      // docked
      layout: 'hbox',
      items: [
        {
          docked: 'top',
          height: 20,
          style: 'background-color: pink; text-align: center;',
          html: '顶部容器'
        },
        p1, p2
      ]
    });
    //var tabPanel = Ext.create('Ext.TabPanel', {
      //id: 'tabPanel',
      //ui: 'dark',
      //tabBarPosition: 'bottom',
      //items: [{
        //title: '主页',
        //html: '主页',
        //iconCls: 'home'
      //},
      //{
        //title: '合同',
        //html: '合同',
        //iconCls: 'user'
      //}]
    //});
    Ext.Viewport.add(panel);
    //panel.setActiveItem(p2);
  }
});
