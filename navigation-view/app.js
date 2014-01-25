//@charset utf-8
Ext.require('Ext.NavigationView');
Ext.application({
  name: 'MyApp',

  launch: function() {
    var view = Ext.create('Ext.NavigationView', {
      navigationBar: {
        ui: 'light',
        docked: 'top'
      },
      items: [{
        title: '标题一',
        html: '组件1'
      }]
    });
    var panel = Ext.create('Ext.Panel', {
      title: '标题二',
      html: '组件2'
    });
    Ext.Viewport.add(view);
    view.push(panel);
    console.log(view.getXTypes());
  }
});
