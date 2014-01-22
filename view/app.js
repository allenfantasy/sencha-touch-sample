Ext.application({
  name: 'MyView',
  requires: ['Ext.TabPanel', 'Ext.Carousel'],

  views: ['Image', 'SearchBar', 'Welcome', 'MyView'],

  launch: function() {

    // creates custom panel instance
    //Ext.create('MyView.view.Welcome', {
      //styleHtmlContent: true
    //});

    // use custom searchbar in a panel (xtype)
    //Ext.create('Ext.Panel', {
      //html: 'Welcome to my app',
      //fullscreen: true,

      //items: [
        //{
          //xtype: 'searchbar',
          //docked: 'top'
        //},
      //]
    //});

    // creates a full screen tappable image
    //Ext.create('MyView.view.Image', {
      //title: 'Orion Nebula',
      //description: 'The Orion Nebula is rather pretty',

      //src: 'http://apod.nasa.gov/apod/image/1202/oriondeep_andreo_960.jpg',
      //fullscreen: true
    //});

    // create an instance of MyView with a spinner field that updates the border config
    var view = Ext.create('MyView.view.MyView', {
      border: 5,
      fullscreen: true,
      styleHtmlContent: true,
      html: 'Tap the spinner to change the border config option',
      items: {
        xtype: 'spinnerfield',
        label: 'Border size',
        docked: 'top',
        value: 5,
        minValue: 0,
        maxValue: 100,
        increment: 1,
        listeners: {
          spin: function(spinner, value) {
            view.setBorder(value);
          }
        }
      }
    });
  }
});
