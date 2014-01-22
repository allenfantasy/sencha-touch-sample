Ext.application({
  name: 'MyComponent',
  requires: ['Ext.MessageBox'],

  launch: function() {
    //var panel = Ext.create('Ext.Panel', {
      //fullscreen: true,
      //html: 'This is a Panel'
    //});
    //panel.setHtml('Some new HTML');
    //Ext.Msg.alert(panel.getHtml());

    // Using xtype
    //Ext.create('Ext.Container', {
      //fullscreen: true,
      //layout: 'fit',
      //items: [
        //{
          //xtype: 'panel',
          //html: 'This panel is created by xtype'
        //},
        //{
          //xtype: 'toolbar',
          //title: 'So is the toolbar',
          //docked: 'top'
        //}
      //]
    //});

    // adding components to containers
    var aboutPanel = Ext.create('Ext.Panel', {
      html: 'About this app'
    });

    // this is the Panel we'll be adding to
    MyComponent.mainPanel = Ext.create('Ext.Panel', {
      fullscreen: true,

      layout: 'hbox',
      defaults: {
        flex: 1
      },

      items: {
        html: 'First Panel',
        style: 'background-color: #5E99CC;'
      }
    });

    // now we add the first panel inside the second
    MyComponent.mainPanel.add(aboutPanel);
  }
});
