Ext.application({
  name: 'MyApp',
  requires: ['Ext.TabPanel', 'Ext.Carousel'],

  launch: function() {
    var red = {
      xtype: 'carousel',
      items: [
        //{ cls: 'head-1 head' },
        //{ cls: 'head-2 head' },
        //{ cls: 'head-3 head' },
        { style: 'background-color: #D55B5B' },
        { style: 'background-color: #B22222' },
        { style: 'background-color: #7C0505' },
      ]
      //style: 'background-color: #B22222; color: white;',
      //title: 'Red',
      //html: 'Red',
      //flex: 1
    };
    var amber = {
      xtype: 'carousel',
      items: [
        //{ cls: 'torso-1 torso' },
        //{ cls: 'torso-2 torso' },
        //{ cls: 'torso-3 torso' },
        { style: 'background-color: #FFDD00' },
        { style: 'background-color: #FFBF00' },
        { style: 'background-color: #FF8F00' },
      ]
      //style: 'background-color: #FF8F00; color: white;',
      //title: 'Amber',
      //html: 'Amber',
      //flex: 1
    };
    var green = {
      xtype: 'carousel',
      items: [
        //{ cls: 'legs-1 legs' },
        //{ cls: 'legs-2 legs' },
        //{ cls: 'legs-3 legs' },
        { style: 'background-color: #7BB300' },
        { style: 'background-color: #3B7E00' },
        { style: 'background-color: #0E3E00' },
      ]
      //style: 'background-color: #3B7E00; color: white;',
      //title: 'Green',
      //html: 'Green',
      //flex: 1
    };
    // layout: 'auto'(default), 'fit', 'card', 'TabPanel', 'Carousel', 'vbox', 'hbox'
    //MyApp.container = Ext.create('Ext.TabPanel', {
      //fullscreen: true,
      //layout: {
        //animation: {type: 'fade', duration: 500}
      //},
      //items: [red, amber, green]
    //});
    //MyApp.container = Ext.create('Ext.Carousel', {
      //fullscreen: true,
      //direction: 'vertical',
      //layout: {
        //animation: {type: 'fade', duration: 500}
      //},
      //items: [red, amber, green]
    //});
    var credits = {
      docked: 'bottom',
      html: 'Credit to Sencha Touch 2',
    }
    //MyApp.container = Ext.create('Ext.Container', {
      //fullscreen: true,
      //layout: {
        //type: 'vbox', // ALSO: 'hbox'
        //pack: 'center' // ALSO: 'start' & 'end'
      //},
      //defaults: { flex: 1 },
      ////direction: 'vbox',
      //items: [red, amber, green, credits]
    //});
    var panel = Ext.create('Ext.Panel', {
      layout: 'hbox',
      items: [
        {
          xtype: 'panel',
          flex: 1,
          html: 'Left Panel, 1/3rd of total size',
          style: 'background-color: #5E99CC;'
        },
        {
          xtype: 'panel',
          flex: 2,
          html: 'Right Panel, 2/3rds of total size',
          style: 'background-color: #759E60;'
        },
      ]
    });
    Ext.Viewport.add(panel);
  }
});
