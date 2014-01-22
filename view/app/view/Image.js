Ext.define('MyView.view.Image', {
  extend: 'Ext.Img',
  requires: ['Ext.MessageBox'],

  config: {
    title: null,
    description: null
  },

  // sets up our tap event listener
  initialize: function() {
    // call superclass' initialize function
    this.callParent(arguments);

    this.element.on('tap', this.onTap, this);
  },

  // this function is called whenever you tap on the image
  onTap: function() {
    Ext.Msg.alert(this.getTitle(), this.getDescription());
  }
});
