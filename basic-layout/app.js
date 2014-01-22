Ext.application({
  name: 'MyBasicLayout',

  launch: function() {
    var red = {
      style: 'background-color: #B22222; color: white;',
      title: 'Red',
      html: 'Red',
      flex: 1
    };
    var amber = {
      style: 'background-color: #FF8F00; color: white;',
      title: 'Amber',
      html: 'Amber',
      flex: 1
    };
    var green = {
      style: 'background-color: #3B7E00; color: white;',
      title: 'Green',
      html: 'Green',
      flex: 1
    };
    // layout: 'auto'(default), 'fit', 'card', 'TabPanel', 'Carousel', 'vbox', 'hbox'
    MyBasicLayout.container = Ext.create('Ext.TabPanel', { // no need to require...
      fullscreen: true,
      layout: {
        animation: {type: 'fade', duration: 500}
      },
      items: [red, amber, green]
    });
  }
});
